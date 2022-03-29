import { Card } from '@/components/Card';
import { useJourney } from '@/jfef/JourneyContext';
import styled from 'styled-components';

export function SignDocsScreen() {
  const { step } = useJourney();

  return (
    <Card heading="On the dotted line">
      <h3>Please read and sign the following documents</h3>
      <p>
        <Jeff />
        <em>Imagine there are documents here</em>
      </p>
      <button onClick={() => step()}>Submit</button>
    </Card>
  );
}

const Jeff = styled.img`
  width: 100%;
  border-radius: 1rem;
  filter: sepia(100%) hue-rotate(345deg) saturate(150%);
`;
Jeff.defaultProps = {
  src: '/images/jeff.webp',
  alt: 'Jeff Goldblum'
};
