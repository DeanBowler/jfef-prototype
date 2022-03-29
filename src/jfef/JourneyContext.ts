import { createContext, useContext } from 'react';

interface JourneyContextProps {
  step(): void;
}

export const JourneyContext = createContext<JourneyContextProps>(
  {} as JourneyContextProps
);

export const useJourney = () => useContext(JourneyContext);
