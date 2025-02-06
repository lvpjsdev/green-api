import { create } from 'zustand'
import { createSelectors } from './createSelectors';
import { createAuthSlice, AuthSlice } from './slices/authSlice';
import { createUserSlice, UserSlice } from './slices/userSlice';

const useAppStoreBase = create<AuthSlice & UserSlice>((...a) => ({
    ...createAuthSlice(...a),
    ...createUserSlice(...a),
}))

export const useAppStore = createSelectors(useAppStoreBase);