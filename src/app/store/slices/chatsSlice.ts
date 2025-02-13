import { StateCreator } from 'zustand';
import { AuthSlice } from './authSlice';

export interface Message {
    id: string;
    text: string;
    sender: string;
    timestamp: number;
}

export interface Chat {
    id: string;
    messages: Message[];
}

export interface ChatsSlice {
    chats: Record<string, Chat>;
    addChat: (chat: Chat) => void;
    removeChat: (id: string) => void;
    isChatExists: (id: string) => boolean;
    getChat: (id: string) => Chat | undefined;
    sendMessage: (chatId: string, message: string) => Promise<void>;
}

export const createChatsSlice: StateCreator<ChatsSlice & AuthSlice, [], [], ChatsSlice> = (set, get) => ({
    chats: {},
    getChat: (id: string) => get().chats[id],
    isChatExists: (id: string) => get().chats[id] !== undefined,
    addMessage: (id: string, message: Message) =>
        set(state => ({
            ...state,
            chats: { ...state.chats, [id]: { ...state.chats[id], messages: [...state.chats[id].messages, message] } },
        })),
    addChat: chat => set(state => ({ ...state, chats: { ...state.chats, [chat.id]: chat } })),
    removeChat: id =>
        set(state => ({ ...state, chats: Object.fromEntries(Object.entries(state.chats).filter(([key]) => key !== id)) })),
    sendMessage: async (chatId: string, message: string) => {
        const { idMessage } = await get().api.sendMessage(chatId, message);
        set(state => ({
            ...state,
            chats: {
                ...state.chats,
                [chatId]: {
                    ...state.chats[chatId],
                    messages: [
                        ...state.chats[chatId].messages,
                        { id: idMessage, text: message, sender: 'user', timestamp: Date.now() },
                    ],
                },
            },
        }));
    },
});
