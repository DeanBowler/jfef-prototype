import styled from 'styled-components';
import { Card } from '@/components/Card';
import { BrowserRouter as Router } from 'react-router-dom';

const AppContainer = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 4rem;
  padding: 0 1rem;
  max-width: 40rem;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Card>stuff</Card>
      </AppContainer>
    </Router>
  );
}

export default App;
