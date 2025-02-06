import { StateCreator } from "zustand";

export interface UserSlice {
    avatar: string;
    phone: string;
    setAvatar: (avatar: string) => void;
    setPhone: (phone: string) => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
    avatar: '',
    phone: '',
    setAvatar: (avatar) => set({ avatar }),
    setPhone: (phone) => set({ phone }),
})
