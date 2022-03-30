import React, { createContext, useContext } from 'react';

interface JourneyContextProps<TState> {
  step(state?: TState): void;
}

export const JourneyContext = createContext<JourneyContextProps<unknown>>(
  {} as JourneyContextProps<unknown>
);

export function useJourney<TState = {}>() {
  return useContext(
    JourneyContext as React.Context<JourneyContextProps<TState>>
  );
}
