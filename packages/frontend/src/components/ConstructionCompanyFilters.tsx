import { ApiSpecialty } from "../types/Api"

interface Props {
    companySpecialties: ApiSpecialty[];
    searchValue: string;
    onSearchValueChange: (value: string) => void;
}

export const ConstructionCompanyFilters = ({ companySpecialties, searchValue, onSearchValueChange }: Props) => {
    return (
        <div>
            <input className="u-full-width" value={searchValue} onChange={(e) => onSearchValueChange(e.target.value)} type="search" placeholder="Type to search..." />
            {companySpecialties.map((companySpecialty) => (
                <label key={companySpecialty} className="example-send-yourself-copy">
                    <input type="checkbox" />
                    <span className="label-body">{companySpecialty}</span>
                </label>
            ))}

        </div>
    )
}