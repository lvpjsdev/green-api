import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button, Input } from '@chakra-ui/react';
import { useFormik } from 'formik';

export const StartChat = () => {
  const formik = useFormik({
    initialValues: {
      phone: '',
    },
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Start Chat
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{'Enter phone number (without +)'}</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <form onSubmit={formik.handleSubmit} id="start-chat-form">
            <Input type="tel" placeholder="Phone number" {...formik.getFieldProps('phone')} />
          </form>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogActionTrigger>
          <Button type="submit" form="start-chat-form">
            Start
          </Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};
