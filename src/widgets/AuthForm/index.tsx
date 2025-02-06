import { useAppStore } from '@/app/store/store';
import { Button, Input } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { Field } from '@/components/ui/field';
import { getWASettings } from '@/shared/api';
export const AuthForm = () => {
  const {
    idInstance,
    apiTokenInstance,
    setIdInstance,
    setApiTokenInstance,
    setAvatar,
    setPhone,
  } = useAppStore();

  const formik = useFormik({
    initialValues: {
      idInstance: '',
      apiTokenInstance: '',
    },
    onSubmit: async values => {
      setIdInstance(values.idInstance);
      setApiTokenInstance(values.apiTokenInstance);

      const response = await getWASettings({
        idInstance,
        apiTokenInstance,
      });

      if (response) {
        setAvatar(response.avatar);
        setPhone(response.phone);
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Field label="Id Instance" errorText={formik.errors.idInstance}>
          <Input
            type="text"
            placeholder="Id Instance"
            {...formik.getFieldProps('idInstance')}
          />
        </Field>
        <Field
          label="Api Token Instance"
          errorText={formik.errors.apiTokenInstance}
          mt={4}
        >
          <Input
            type="text"
            placeholder="Api Token Instance"
            {...formik.getFieldProps('apiTokenInstance')}
          />
        </Field>
        <Button type="submit" mt={4}>
          Save
        </Button>
      </form>
    </div>
  );
};
