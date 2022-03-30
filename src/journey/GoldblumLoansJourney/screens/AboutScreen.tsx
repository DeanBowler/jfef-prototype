import { ApplicantData } from '@/api/application';
import { Card } from '@/components/Card';
import { TextInput } from '@/components/TextInput';
import { useProvideData } from '@/hooks/useProvideData';
import { useForm } from 'react-hook-form';

type AboutFields = Pick<ApplicantData, 'firstName' | 'lastName'>;

export function AboutScreen() {
  const { mutate } = useProvideData();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AboutFields>();

  const onSubmit = (data: AboutFields) => {
    mutate(data);
  };

  return (
    <Card heading="About You">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Lets get started by telling us something about yourself</h3>
        <TextInput
          {...register('firstName', {
            required: { message: 'First name is required', value: true }
          })}
          label="First Name"
          placeholder="e.g. Jeff"
          error={errors?.firstName?.message}
        />
        <TextInput
          {...register('lastName', {
            required: { message: 'Last name is required', value: true }
          })}
          label="Last Name"
          placeholder="e.g. Goldblum"
          error={errors?.lastName?.message}
        />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}
