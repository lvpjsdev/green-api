import { useAppStore } from '@/app/store/store';
import { Button, Group, Input } from '@chakra-ui/react';
import { useFormik } from 'formik';

export const SendMessage = ({ phone }: { phone: string }) => {
  const { api } = useAppStore.use.api();

  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} id="send-message-form">
        <Group attached>
          <Input type="text" placeholder="Message" {...formik.getFieldProps('message')} />
          <Button type="submit" form="send-message-form">
            Send
          </Button>
        </Group>
      </form>
    </div>
  );
};
