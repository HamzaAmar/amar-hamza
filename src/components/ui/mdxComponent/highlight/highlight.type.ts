import { Language } from 'prism-react-renderer';

export interface HighLightProps {
  code: string;
  language: Language;
  showLines: boolean;
}
