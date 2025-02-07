import { create } from 'zustand';
import { createSelectors } from './createSelectors';
import { type AuthSlice, createAuthSlice } from './slices/authSlice';
import { type UserSlice, createUserSlice } from './slices/userSlice';

const useAppStoreBase = create<AuthSlice & UserSlice>((...a) => ({
    ...createAuthSlice(...a),
    ...createUserSlice(...a),
}))

export const useAppStore = createSelectors(useAppStoreBase);