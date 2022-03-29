import { Card } from '@/components/Card';
import { TextInput } from '@/components/TextInput';
import { useJourney } from '@/jfef/JourneyContext';

export function AboutScreen() {
  const { step } = useJourney();

  return (
    <Card heading="About You">
      <h3>Lets get started by telling us something about yourself</h3>
      <TextInput label="First Name" placeholder="e.g. Jeff" />
      <TextInput label="Last Name" placeholder="e.g. Goldblum" />
      <button onClick={() => step()}>Submit</button>
    </Card>
  );
}
