import { Card } from '@/components/Card';
import { TextInput } from '@/components/TextInput';
import { useJourney } from '@/jfef/JourneyContext';

export function GamblingScreen() {
  const { step } = useJourney();

  return (
    <Card heading="So this is awkward...">
      <h3>
        We think you might have gambling issues, so need to ask a few more
        questions
      </h3>
      <TextInput
        label="Gambling spending per week (£)"
        type="number"
        explainer="Yes this includes the national lottery"
      />
      <TextInput label="Choose a number from 1-100" type="number" />
      <button onClick={step}>Submit</button>
    </Card>
  );
}
