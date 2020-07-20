import { CommonProps } from '../../utils/common.model';

export interface LandingScreenProps extends CommonProps {
	theme: 'light' | 'dark' | null;
	toggleTheme: () => void;
}
