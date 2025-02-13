import { Message as MessageType } from '@/app/store/slices/chatsSlice';
import { Card, Text } from '@chakra-ui/react';
import { useMemo } from 'react';

export const Message = ({ message }: { message: MessageType }) => {
  const formattedDate = useMemo(() => {
    const date = new Date(message.timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }, [message.timestamp]);

  return (
    <Card.Root>
      <Card.Header>
        <Text>{message.text}</Text>
      </Card.Header>
      <Card.Body>
        <Text lineClamp="2">{message.text}</Text>
      </Card.Body>
      <Card.Footer>
        <Text>{formattedDate}</Text>
      </Card.Footer>
    </Card.Root>
  );
};
