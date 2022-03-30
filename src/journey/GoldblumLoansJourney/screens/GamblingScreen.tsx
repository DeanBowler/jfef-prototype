import { ApplicantData } from '@/api/application';
import { Card } from '@/components/Card';
import { TextInput } from '@/components/TextInput';
import { useProvideData } from '@/hooks/useProvideData';
import { useJourney } from '@/jfef/JourneyContext';
import { useForm } from 'react-hook-form';

type GamblingFields = Pick<ApplicantData, 'gamblingSpending'>;

export function GamblingScreen() {
  const { mutate } = useProvideData();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<GamblingFields>();

  const onSubmit = (data: GamblingFields) => {
    mutate(data);
  };

  return (
    <Card heading="So this is awkward...">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>
          We think you might have gambling issues, so need to ask a few more
          questions
        </h3>
        <TextInput
          label="Gambling spending per week (£)"
          type="number"
          explainer="Yes this includes the national lottery"
          {...register('gamblingSpending', {
            required: { message: 'Just tell us already', value: true }
          })}
          error={errors?.gamblingSpending?.message}
        />
        <TextInput label="Choose a number from 1-100" type="number" />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}
