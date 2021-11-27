import { useEffect, useState } from "react"
import { ConstructionCompanyFilters } from "../components/ConstructionCompanyFilters"
import { ConstructionCompanyTable } from "../components/ConstructionCompanyTable"
import { ApiService } from "../services/ApiService";
import { ApiCompany, ApiSpecialty } from "../types/Api";
import styles from './ConstructionCompaniesListScreen.module.scss';

interface Filters {
    search: string,
    specialties: ApiSpecialty[]
}

export const ConstructionCompaniesListScreen = () => {

    const [companies, setCompanies] = useState<ApiCompany[]>([]);
    const [filteredCompanies, setFilteredCompanies] = useState<ApiCompany[]>([]);
    const [companySpecialties, setCompanySpecialties] = useState<ApiSpecialty[]>([]);
    const [isErrored, setIsErrored] = useState(false);
    const [filters, setFilters] = useState<Filters>({
        search: '',
        specialties: []
    });

    useEffect(() => {
        setFilteredCompanies(() => companies.filter((currentCompany) => {
            if (filters.search && !currentCompany.name.toLowerCase().includes(filters.search.toLowerCase())) {
                return false;
            }
            return currentCompany.specialties.some((specialty) => filters.specialties.indexOf(specialty) !== -1)
        }))
    }, [filters, companies])

    useEffect(() => {
        Promise.all([
            ApiService.getAllCompanies(),
            ApiService.getAllCompanySpecialties()
        ]).then(([companies, specialties]) => {
            setFilters((prevFilters) => ({ ...prevFilters, specialties }));
            setCompanies(companies);
            setCompanySpecialties(specialties);
        }, () => {
            setIsErrored(true)
        })
    }, [])

    const toggleFilterSpecialty = (specialty: string) => {
        if (filters.specialties.indexOf(specialty) !== -1) {
            setFilters((prevFilters) => ({ ...prevFilters, specialties: prevFilters.specialties.filter((specialtyToFilter) => specialtyToFilter !== specialty) }))
        } else {
            setFilters((prevFilters) => ({ ...prevFilters, specialties: [...prevFilters.specialties, specialty] }))
        }
    }

    return (
        <div className="container">
            <h1 className={styles.pageTitle}>Construction companies</h1>
            {!isErrored ? (
                <div className="row">
                    <div className="four columns">
                        <ConstructionCompanyFilters
                            companySpecialties={companySpecialties}
                            searchValue={filters.search}
                            selectedCompanySpecialties={filters.specialties}
                            onClickOnCompanySpecialty={(specialty) => toggleFilterSpecialty(specialty)}
                            onSearchValueChange={(value) => setFilters((prevFilters) => ({ ...prevFilters, search: value }))}
                        ></ConstructionCompanyFilters>
                    </div>
                    <div className="eight columns">
                        <p>Showing {filteredCompanies.length} out of {companies.length} companies</p>
                        <ConstructionCompanyTable companies={filteredCompanies}></ConstructionCompanyTable>
                    </div>
                </div>
            ) : <div className={styles.errorBox}>
                <p>There was an error. Couldn't retrieve companies and specialties from API.</p>
            </div>}
        </div>
    )
}