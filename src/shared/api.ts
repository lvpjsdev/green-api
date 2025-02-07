import { WASettingsResponse } from './types';

const apiUrl = 'https://1103.api.green-api.com';

export class Api {
    idInstance: string;
    apiTokenInstance: string;
    isAuth: boolean;

    constructor() {
        this.idInstance = '';
        this.apiTokenInstance = '';
        this.isAuth = false;
    }

    async auth(idInstance: string, apiTokenInstance: string): Promise<WASettingsResponse> {
        try {
            const response = await fetch(`${apiUrl}/waInstance${idInstance}/getWaSettings/${apiTokenInstance}`);
            const data: WASettingsResponse = await response.json();
            this.idInstance = idInstance;
            this.apiTokenInstance = apiTokenInstance;
            this.isAuth = true;

            return data;

        } catch (error) {
            throw new Error('Failed to authenticate');
        }
    }
}