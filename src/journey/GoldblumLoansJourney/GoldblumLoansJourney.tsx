import Glasses from '@/icons/Glasses';
import { JourneyFlow, JourneyStageScreens } from '@/jfef/JourneyFlow';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { AboutScreen } from './screens/AboutScreen';
import { EmploymentScreen } from './screens/EmploymentScreen';
import { GamblingScreen } from './screens/GamblingScreen';
import { SignDocsScreen } from './screens/SignDocsScreen';

const goldblumScreens: JourneyStageScreens[] = [
  {
    stage: 'provideData',
    journey: [
      {
        name: 'about',
        path: 'about',
        screen: AboutScreen,
        provides: ['firstName', 'lastName']
      },
      {
        name: 'employment',
        path: 'employment',
        screen: EmploymentScreen,
        provides: ['employer', 'employmentSector']
      }
    ],
    additional: [
      {
        name: 'gambling',
        path: 'gambling',
        screen: GamblingScreen,
        provides: ['gambling']
      }
    ]
  },
  {
    stage: 'signDocs',
    additional: [
      {
        name: 'sign',
        path: 'sign',
        screen: SignDocsScreen
      }
    ]
  }
];

export function GoldblumLoansJourney() {
  return (
    <div>
      <h1>
        <GlassesLogo height="24px" />
        Goldblum Loans
      </h1>
      <Routes>
        <Route path="/" element={<div>Welcome</div>} />
        <Route
          path="/apply/*"
          element={
            <JourneyFlow
              screens={goldblumScreens}
              initialState={{}}
              stateMapper={() => ({ stage: 'provideData' })}
            />
          }
        />
      </Routes>
    </div>
  );
}

const GlassesLogo = styled(Glasses)`
  margin-right: 0.5rem;
`;
