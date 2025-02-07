import { Avatar, Container, Stack, HStack, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface UserProps {
  phone: string;
  avatar: string;
}

export const User: FC<UserProps> = ({ phone, avatar }) => {
  return (
    <Container fluid>
      <HStack gap="4">
        <Avatar.Root>
          <Avatar.Fallback name={phone} />
          <Avatar.Image src={avatar} />
        </Avatar.Root>
        <Stack gap="0">
          <Text fontWeight="medium">{phone}</Text>
        </Stack>
      </HStack>
    </Container>
  );
};
