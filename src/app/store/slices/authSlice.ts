import { StateCreator } from "zustand";

export interface AuthSlice {
    idInstance: string;
    apiTokenInstance: string;
    setIdInstance: (idInstance: string) => void;
    setApiTokenInstance: (apiTokenInstance: string) => void;
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
    idInstance: '',
    apiTokenInstance: '',
    setIdInstance: (idInstance) => set({ idInstance }),
    setApiTokenInstance: (apiTokenInstance) => set({ apiTokenInstance }),
})
