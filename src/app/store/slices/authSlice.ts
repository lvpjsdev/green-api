import { Api } from '@/shared/api';
import { StateCreator } from 'zustand';
import { UserSlice } from './userSlice';
export interface AuthSliceState {
    api: Api;
    idInstance: string;
    apiTokenInstance: string;
}

export interface AuthSliceActions {
    auth: (idInstance: string, apiTokenInstance: string) => Promise<void>;
}

export type AuthSlice = AuthSliceState & AuthSliceActions;

export const createAuthSlice: StateCreator<
    AuthSlice & UserSlice,
    [],
    [],
    AuthSlice
> = (set, get) => ({
    api: new Api(),
    idInstance: '',
    apiTokenInstance: '',
    auth: async (idInstance: string, apiTokenInstance: string) => {
        const api = get().api;
        const data = await api.auth(idInstance, apiTokenInstance);
        set({ idInstance, apiTokenInstance });
        get().setUser({ avatar: data.avatar, phone: data.phone, isAuth: true });
    },
});
