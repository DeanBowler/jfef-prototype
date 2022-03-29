const featureFlags = {
  doTheThing: true
};

/**
 * Dummy feature flag hook
 */
export const useFeatureFlag = (key: keyof typeof featureFlags): boolean => {
  return featureFlags[key];
};
