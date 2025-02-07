import { useAppStore } from '@/app/store/store';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import { Outlet, useNavigate } from 'react-router';

export const Layout = () => {
  const { isAuth } = useAppStore.use.user();
  const navigate = useNavigate();

  if (!isAuth) {
    navigate('/');
  }

  return (
    <Grid h="200px" templateRows="repeat(5, 1fr)" templateColumns="repeat(5, 1fr)" gap={4}>
      <GridItem rowSpan={5} colSpan={1}>
        <Text>Chats List</Text>
      </GridItem>
      <GridItem colSpan={4}>
        <Outlet />
      </GridItem>
    </Grid>
  );
};
