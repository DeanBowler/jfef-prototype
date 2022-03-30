import {
  ApplicantData,
  Application,
  provideApplicantData
} from '@/api/application';
import { useJourney } from '@/jfef/JourneyContext';
import { useMutation } from 'react-query';

export function useProvideData() {
  const { step } = useJourney<Application>();

  return useMutation<Application, any, Partial<ApplicantData>>(
    (data) => provideApplicantData(data),
    {
      onSuccess: (application) => {
        step(application);
      }
    }
  );
}
