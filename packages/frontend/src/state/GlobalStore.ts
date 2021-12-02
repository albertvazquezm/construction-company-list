import { ApiCompany } from "../types/Api";

class GlobalStore {
    companies: ApiCompany[] = [];
    constructor() {
    }
    replaceCompanies(companies: ApiCompany[]) {
        this.companies = companies;
    }
}

export const globalStore = new GlobalStore();