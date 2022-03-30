export interface ApplicantData {
  firstName: string;
  lastName: string;
  gamblingSpending: number;
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

export const getApplication = () => {
  return Promise.resolve<Application>({
    applicantData: fakeServerState.applicantData,
    requestedActions: [
      {
        type: 'application.provideData',
        dataType:
          fakeServerState.applicantData.firstName === 'Barry' &&
          fakeServerState.applicantData.gamblingSpending === undefined
            ? ['gambling']
            : []
      }
    ]
  });
};

export const provideApplicantData = (data: Partial<ApplicantData>) => {
  fakeServerState = {
    ...fakeServerState,
    ...{ applicantData: { ...fakeServerState.applicantData, ...data } }
  };

  return getApplication();
};
