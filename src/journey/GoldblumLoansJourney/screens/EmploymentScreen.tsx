import { ApplicantData } from '@/api/application';
import { Card } from '@/components/Card';
import { TextInput } from '@/components/TextInput';
import { useProvideData } from '@/hooks/useProvideData';
import { useJourney } from '@/jfef/JourneyContext';
import { useForm } from 'react-hook-form';

type EmploymentFields = Pick<
  ApplicantData,
  'employer' | 'jobTitle' | 'incomePcm'
>;

export function EmploymentScreen() {
  const { mutate } = useProvideData();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<EmploymentFields>();

  const onSubmit = (data: EmploymentFields) => {
    mutate(data);
  };

  return (
    <Card heading="Employment">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Provide information on your income</h3>
        <TextInput
          label="Employer"
          placeholder="e.g. Pokebrook"
          {...register('employer')}
        />
        <TextInput
          label="Job Title"
          placeholder="e.g. Blacksmith"
          {...register('jobTitle')}
        />
        <TextInput
          type="number"
          label="Income (net PCM)"
          {...register('incomePcm', {
            required: { message: 'Income is required', value: true }
          })}
          error={errors?.incomePcm?.message}
          explainer={{
            title: 'What does this mean?',
            body: 'Include any benefits and salary, after tax and deductions'
          }}
        />
        <button type="submit">Sign</button>
      </form>
    </Card>
  );
}
