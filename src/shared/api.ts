import { useAuthStore } from '@/app/store/store';
import { WASettingsResponse } from './types';

const apiUrl = 'https://1103.api.green-api.com';

export const getWASettings = async ({
    idInstance,
    apiTokenInstance,
}: {
    idInstance: string;
    apiTokenInstance: string;
}): Promise<WASettingsResponse> => {

    const response = await fetch(`${apiUrl}/waInstance${idInstance}/getWaSettings/${apiTokenInstance}`);
    return await response.json();
};

