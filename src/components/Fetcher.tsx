import { createContext } from 'react';
import { type Blog } from '@/details';


export type State = {
  loading: boolean;
  error: string | null;
  data: string | Blog | Blog[] | null;
};

type Action =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_DATA'; payload: string | Blog | Blog[] | null }
  | { type: 'RESET' };

export const reducer = (prevState: State, action: Action): State => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...prevState, loading: action.payload };
    case 'SET_ERROR':
      // ensure error is string | null (never undefined)
      return { ...prevState, error: action.payload ?? null, loading: false };
    case 'SET_DATA':
      return { ...prevState, data: action.payload ?? null, error: null, loading: false };
    case 'RESET':
      return { loading: false, error: null, data: null };
    default:
      return prevState;
  }
};

export const FetcherContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: { loading: false, error: null, data: null },
  dispatch: () => null,
});
