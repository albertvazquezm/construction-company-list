import config from '../config.json';
import { ApiCompany, ApiSpecialty } from '../types/Api';

export class ApiService {
    static getAllCompanies(): Promise<ApiCompany[]> {
        return fetch(`${config.apiUrl}${config.apiEndpoints.getAllCompanies}`).then((response) => response.json())
    }
    static getAllCompanySpecialties(): Promise<ApiSpecialty[]> {
        return fetch(`${config.apiUrl}${config.apiEndpoints.getCompanySpecialties}`).then((response) => response.json())
    }
}