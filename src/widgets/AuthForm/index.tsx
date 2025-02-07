import { useAppStore } from '@/app/store/store';
import { Field } from '@/components/ui/field';
import { Button, Input } from '@chakra-ui/react';
import { useFormik } from 'formik';

export const AuthForm = () => {
  const auth = useAppStore.use.auth();

  const formik = useFormik({
    initialValues: {
      idInstance: '',
      apiTokenInstance: '',
    },
    onSubmit: async values => {
      auth(values.idInstance, values.apiTokenInstance);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Field label="Id Instance" errorText={formik.errors.idInstance}>
          <Input type="text" placeholder="Id Instance" {...formik.getFieldProps('idInstance')} />
        </Field>
        <Field label="Api Token Instance" errorText={formik.errors.apiTokenInstance} mt={4}>
          <Input type="text" placeholder="Api Token Instance" {...formik.getFieldProps('apiTokenInstance')} />
        </Field>
        <Button type="submit" mt={4}>
          Save
        </Button>
      </form>
    </div>
  );
};
