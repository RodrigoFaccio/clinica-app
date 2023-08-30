import { ThemeProps } from './default';
import 'styled-components';
declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeProps {}
}