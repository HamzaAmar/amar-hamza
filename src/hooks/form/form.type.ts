interface Data {
  message: string;
}

export interface State {
  data: Data | null;
  error: Error | null;
  status: 'idle' | 'loading' | 'success' | 'error';
}
interface Fetching {
  type: 'fetching';
}
interface Fetched {
  type: 'fetched';
  data: Data;
}
interface ErrorType {
  type: 'error';
  error: Error;
}

export interface InitialValue {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type Action = Fetching | Fetched | ErrorType;

// export interface JSONResponse {
//   data?: {
//     pokemon: InitialValue;
//   };
//   errors?: Array<{ message: string }>;
// }
