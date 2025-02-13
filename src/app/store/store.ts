import { create } from 'zustand';
import { createSelectors } from './createSelectors';
import { type AuthSlice, createAuthSlice } from './slices/authSlice';
import { type ChatsSlice, createChatsSlice } from './slices/chatsSlice';
import { type UserSlice, createUserSlice } from './slices/userSlice';

const useAppStoreBase = create<AuthSlice & UserSlice & ChatsSlice>((...a) => ({
    ...createAuthSlice(...a),
    ...createUserSlice(...a),
    ...createChatsSlice(...a),
}))

export const useAppStore = createSelectors(useAppStoreBase);