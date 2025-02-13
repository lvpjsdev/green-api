import { GetAvatarResponse, NotificationResponse, SendMessageResponse, WASettingsResponse } from './types';

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
        if (import.meta.env.MODE === "development") {
            return {
                avatar: 'avatar',
                phone: '666',
                stateInstance: 'dev',
                deviceId: 'device'
            }
        }

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

    async sendMessage(chatId: string, message: string) {
        const response = await fetch(`${apiUrl}/waInstance${this.idInstance}/sendMessage/${this.apiTokenInstance}`, {
            method: 'POST',
            body: JSON.stringify({ chatId, message }),
        });
        const data: SendMessageResponse = await response.json();
        return data;
    }

    async getNotification() {
        const response = await fetch(`${apiUrl}/waInstance${this.idInstance}/receiveNotification/${this.apiTokenInstance}`);
        const data: NotificationResponse = await response.json();
        return data;
    }

    async deleteNotification(receiptId: number) {
        const response = await fetch(`${apiUrl}/waInstance${this.idInstance}/deleteNotification/${this.apiTokenInstance}`, {
            method: 'DELETE',
            body: JSON.stringify({ receiptId }),
        });
        const data: { result: boolean } = await response.json();
        return data;
    }

    async getAvatar(chatId: string) {
        const response = await fetch(`${apiUrl}/waInstance${this.idInstance}/downloadFile/${this.apiTokenInstance}`, {
            method: 'POST',
            body: JSON.stringify({ chatId }),
        });
        const data: GetAvatarResponse = await response.json();
        return data;
    }
}
