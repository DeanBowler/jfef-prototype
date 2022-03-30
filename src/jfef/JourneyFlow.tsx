import { Card } from '@/components/Card';
import { useAtom } from 'jotai';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { JourneyContext } from './JourneyContext';
import { journeyHistoryAtom } from './state';

export interface JourneyScreen {
  name: string;
  path: string;
  screen: React.FunctionComponent;
  provides?: string[];
}

export interface JourneyStageScreens {
  stage: string;
  journey?: JourneyScreen[];
  additional?: JourneyScreen[];
}

export interface JourneyFlowProps<TState> {
  initialState?: TState;
  stateMapper: (state: TState) => { stage: string; requires?: string[] };
  invalidStateBehaviour?: 'redirect' | 'showError';
  screens: JourneyStageScreens[];
}

const getAllScreens = (
  screens: JourneyStageScreens | undefined
): JourneyScreen[] => [
  ...(screens?.journey ?? []),
  ...(screens?.additional ?? [])
];

export function JourneyFlow<TState>({
  screens,
  initialState,
  invalidStateBehaviour,
  stateMapper
}: JourneyFlowProps<TState>) {
  const initial = useRef(false);

  // TODO: store mapped state here
  const state = useRef(initialState);

  const { '*': stepFromPath } = useParams();

  useEffect(() => {
    state.current = state.current ?? initialState;
  }, [initialState]);

  const [history, setHistory] = useAtom(journeyHistoryAtom);

  const navigate = useNavigate();

  const screenRoutes = useMemo(() => screens.flatMap(getAllScreens), [screens]);

  const isCurrentStepValid = useCallback(() => {
    const mappedState = state.current && stateMapper(state.current);

    const stageForCurrentState = screens.find(
      (s) => s.stage === mappedState?.stage
    );

    return getAllScreens(stageForCurrentState).some(
      (s) => s.path === stepFromPath
    );
  }, [stateMapper, stepFromPath]);

  const getNextScreen = useCallback(() => {
    const mappedState = state.current && stateMapper(state.current);

    const currentStageScreens = screens.find(
      (s) => s.stage === mappedState?.stage
    );

    if (mappedState?.requires?.length) {
      const additionalMatchingRequirements =
        currentStageScreens?.additional?.find((screen) =>
          screen.provides?.some((p) => mappedState?.requires?.includes(p))
        );
      return additionalMatchingRequirements;
    }

    if (stepFromPath && currentStageScreens?.journey?.length) {
      const matchIdx = currentStageScreens.journey.findIndex(
        (js) => js.path === stepFromPath
      );
      if (matchIdx >= 0 && currentStageScreens.journey.length >= matchIdx) {
        return currentStageScreens.journey[matchIdx + 1];
      }
    }

    const match = currentStageScreens?.journey?.filter(
      (s) => !history.some((hi) => hi.screenName === s.name)
    )[0];

    return match;
  }, [stateMapper, history, stepFromPath]);

  const gotoValidScreen = useCallback(() => {
    const nextScreen = getNextScreen();

    if (nextScreen) {
      navigate({ pathname: nextScreen.path });
    }
  }, [history, getNextScreen, navigate]);

  const step = useCallback(
    (updateState?: TState) => {
      if (updateState) state.current = updateState;

      const nextScreen = getNextScreen();

      if (nextScreen) {
        if (Boolean(stepFromPath)) {
          setHistory((h) => [...h, { screenName: stepFromPath! }]);
        }
        navigate({ pathname: nextScreen.path });
      }
    },
    [history, setHistory, getNextScreen, navigate]
  );

  useEffect(() => {
    if (state.current && initial.current === false) {
      initial.current = true;

      if (!Boolean(stepFromPath)) {
        gotoValidScreen();
      } else if (!isCurrentStepValid()) {
        switch (invalidStateBehaviour) {
          case 'redirect':
            navigate({ pathname: 'invalid' });
            break;
          case 'showError':
            gotoValidScreen();
            break;
        }
      }
    }
  }, [step]);

  return (
    <JourneyContext.Provider value={{ step }}>
      <Routes>
        {screenRoutes.map(({ path, screen: Screen }) => (
          <Route key={path} path={path} element={<Screen />} />
        ))}
        <Route
          path="invalid"
          element={
            <Card heading="Invalid state">
              <p>The page you are trying to access is no longer valid.</p>
              <button onClick={gotoValidScreen}>Resume application</button>
            </Card>
          }
        />
      </Routes>
    </JourneyContext.Provider>
  );
}
