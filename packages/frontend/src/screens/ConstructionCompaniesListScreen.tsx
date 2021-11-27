import { useEffect, useState } from "react"
import { ConstructionCompanyFilters } from "../components/ConstructionCompanyFilters"
import { ConstructionCompanyTable } from "../components/ConstructionCompanyTable"
import { ErrorScreen } from "../components/ErrorScreen";
import { ApiService } from "../services/ApiService";
import { ApiCompany, ApiSpecialty } from "../types/Api";

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
        specialties: ["Plumbing"]
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
            setCompanies(companies);
            setCompanySpecialties(specialties);
        }, () => {
            console.error(`There was an error when loading companies and specialties`)
        })
    }, [])

    return (
        <div className="container">
            <h1>Construction companies</h1>
            <div className="row">
                <div className="four columns">
                    <ConstructionCompanyFilters
                        companySpecialties={companySpecialties}
                        searchValue={filters.search}
                        onSearchValueChange={(value) => setFilters((prevFilters) => ({ ...prevFilters, search: value }))}
                    ></ConstructionCompanyFilters>
                </div>
                <div className="eight columns">
                    <ConstructionCompanyTable companies={filteredCompanies}></ConstructionCompanyTable>
                </div>
            </div>
        </div>
    )
}