import { ApiCompany } from "../types/Api"

interface ConstructionCompanyTableProps {
    companies: ApiCompany[];
}

export const ConstructionCompanyTable = ({ companies }: ConstructionCompanyTableProps) => {
    return (
        <div>
            <table className="u-full-width">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Logo</th>
                        <th>Name</th>
                        <th>Specialties</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map(company => (
                        <tr key={company.id}>
                            <td>{company.id}</td>
                            <td><img src={`${company.logo}?random=${company.id}`} alt={company.name}/></td>
                            <td>{company.name}</td>
                            <td>{company.specialties.join(', ')}</td>
                            <td>{company.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}