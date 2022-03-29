import { atomWithStorage } from 'jotai/utils';
import { focusAtom } from 'jotai/optics';

interface JourneyHistory {
  screenName: string;
}

interface JourneyState {
  journeyHistory: readonly JourneyHistory[];
}

const initialState: JourneyState = {
  journeyHistory: []
};

export const journeyStateAtom = atomWithStorage('o6k-journey', initialState);

export const journeyHistoryAtom = focusAtom(journeyStateAtom, (optic) =>
  optic.prop('journeyHistory')
);
