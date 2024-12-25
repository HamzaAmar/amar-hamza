export interface FormState {
  message?: string;
  status?: 'idle' | 'success' | 'error';
}

export type StatusProps =
  | 'idle'
  | 'success'
  | 'error'
  | 'expired'
  | 'solved';
