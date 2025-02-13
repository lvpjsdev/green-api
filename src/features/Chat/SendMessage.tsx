import { useAppStore } from '@/app/store/store';
import { Button, Group, Input } from '@chakra-ui/react';
import { useFormik } from 'formik';

export const SendMessage = ({ chatId }: { chatId: string }) => {
  const sendMessage = useAppStore.use.sendMessage();

  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: async values => {
      await sendMessage(chatId, values.message);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} id="send-message-form">
        <Group attached>
          <Input type="text" placeholder="Message" {...formik.getFieldProps('message')} />
          <Button type="submit" form="send-message-form" loading={formik.isSubmitting}>
            Send
          </Button>
        </Group>
      </form>
    </div>
  );
};
