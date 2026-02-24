// This file is intentionally minimal as the backend has no custom methods
// All data is managed client-side for this static gallery application

import { useActor } from './useActor';

// Placeholder for future backend integration
export function useBackendHealth() {
  const { actor, isFetching } = useActor();
  
  return {
    actor,
    isFetching,
    isReady: !!actor && !isFetching
  };
}
