import { useAppStore } from '@/app/store/store';
import { Flex } from '@chakra-ui/react';
import { Message } from './Message';
import { SendMessage } from './SendMessage';

export const Chat = ({ id }: { id: string }) => {
  const isChatExists = useAppStore.use.isChatExists();
  const getChat = useAppStore.use.getChat();
  const addChat = useAppStore.use.addChat();

  if (!isChatExists(id)) {
    addChat({ id, messages: [] });
  }

  const chat = getChat(id);

  return (
    <div>
      <Flex flexDirection="column" gap={2}>
        <div>{chat?.messages.map(message => <Message key={message.id} message={message} />)}</div>
      </Flex>
      <SendMessage chatId={id} />
    </div>
  );
};
