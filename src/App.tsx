import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import { GoldblumLoansJourney } from './journey/GoldblumLoansJourney';

const AppContainer = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 4rem;
  padding: 0 1rem;
  max-width: 40rem;
`;

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <AppContainer>
          <GoldblumLoansJourney />
        </AppContainer>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
