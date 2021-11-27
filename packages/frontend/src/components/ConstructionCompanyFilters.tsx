import { ApiSpecialty } from "../types/Api"

interface Props {
    companySpecialties: ApiSpecialty[];
    searchValue: string;
    onSearchValueChange: (value: string) => void;
    selectedCompanySpecialties: string[];
    onClickOnCompanySpecialty: (specialty: string) => void;
}

export const ConstructionCompanyFilters = ({
    companySpecialties,
    searchValue,
    onSearchValueChange,
    selectedCompanySpecialties,
    onClickOnCompanySpecialty
}: Props) => {
    return (
        <div>
            <label htmlFor="searchInput">Search</label>
            <input id="searchInput" className="u-full-width" value={searchValue} onChange={(e) => onSearchValueChange(e.target.value)} type="search" placeholder="Type to search..." />
            <label>Filter by specialty</label>
            {companySpecialties.map((companySpecialty) => (
                <label key={companySpecialty} className="example-send-yourself-copy">
                    <input type="checkbox" checked={selectedCompanySpecialties.indexOf(companySpecialty) !== -1} onChange={() => onClickOnCompanySpecialty(companySpecialty)}/>
                    <span className="label-body">{companySpecialty}</span>
                </label>
            ))}

        </div>
    )
}