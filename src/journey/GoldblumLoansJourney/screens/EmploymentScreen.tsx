import { Card } from '@/components/Card';
import { TextInput } from '@/components/TextInput';
import { useJourney } from '@/jfef/JourneyContext';

export function EmploymentScreen() {
  const { step } = useJourney();

  return (
    <Card heading="Employment">
      <h3>Provide information on your income</h3>
      <TextInput label="Employer" placeholder="e.g. Pokebrook" />
      <TextInput label="Job Title" placeholder="e.g. Blacksmith" />
      <button onClick={step}>Submit</button>
    </Card>
  );
}
