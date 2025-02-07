import { StateCreator } from 'zustand';

export interface User {
    avatar: string;
    phone: string;
    isAuth: boolean;
}

export interface UserSlice {
    user: User;
    setUser: (user: User) => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
    user: { avatar: '', phone: '', isAuth: false },
    setUser: (user) => set((state) => ({ ...state, user })),
})
