import { Avatar } from '@/components/ui/avatar';
import { Card, Status, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
interface ChatListItemProps {
  senderName?: string;
  lastMessage?: string;
  timestamp?: number;
  avatar?: string;
  isUnread?: boolean;
  onClick: () => void;
}

export const ChatListItem = ({ senderName, lastMessage, timestamp, avatar, isUnread, onClick }: ChatListItemProps) => {
  const formattedDate = useMemo(() => {
    const date = new Date(timestamp ?? 0);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }, [timestamp]);

  return (
    <Card.Root onClick={onClick}>
      <Card.Header className="flex items-center gap-2">
        <Avatar src={avatar} size="sm" name={senderName} />
        <Text>{senderName}</Text>
      </Card.Header>
      <Card.Body>
        {isUnread && (
          <Status.Root>
            <Status.Indicator colorPalette={'green'} />
          </Status.Root>
        )}
        <Text lineClamp="2">{lastMessage}</Text>
      </Card.Body>
      <Card.Footer>
        <Text>{formattedDate}</Text>
      </Card.Footer>
    </Card.Root>
  );
};
