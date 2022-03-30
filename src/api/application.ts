export interface ApplicantData {
  firstName: string;
  lastName: string;
  gamblingSpending: number;
  employer: string;
  jobTitle: string;
  incomePcm: number;
}

interface ApplicationState {
  applicantData: Partial<ApplicantData>;
}

export type ApplicationActionType =
  | 'application.provideData'
  | 'application.sign';

export interface ApplicationAction {
  type: string;
  dataType: string[];
}

export interface Application {
  applicantData: Partial<ApplicantData>;
  requestedActions: readonly ApplicationAction[];
}

let fakeServerState: ApplicationState = {
  applicantData: {}
};

const fakeDataActions = () => [
  {
    type: 'application.provideData',
    dataType:
      fakeServerState.applicantData.firstName === 'Barry' &&
      fakeServerState.applicantData.gamblingSpending === undefined
        ? ['gambling']
        : []
  }
];

const fakeSignActions = () => [
  {
    type: 'application.sign',
    dataType: []
  }
];

export const getApplication = () => {
  return Promise.resolve<Application>({
    applicantData: fakeServerState.applicantData,
    requestedActions: fakeServerState.applicantData.incomePcm
      ? fakeSignActions()
      : fakeDataActions()
  });
};

export const provideApplicantData = (data: Partial<ApplicantData>) => {
  fakeServerState = {
    ...fakeServerState,
    ...{ applicantData: { ...fakeServerState.applicantData, ...data } }
  };

  return getApplication();
};
