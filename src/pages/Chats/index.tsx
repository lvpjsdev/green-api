import { useAppStore } from '@/app/store/store';
import { StartChat } from '@/features/Chat';
import { User } from '@/features/User';

export const Chats = () => {
  const { avatar, phone } = useAppStore.use.user();

  return (
    <div>
      <User avatar={avatar} phone={phone} />
      <StartChat />
    </div>
  );
};
