import { useColorScheme } from 'react-native-appearance';
import { themedColors } from '../styles/themes';

export const useTheme = () => {
	const theme = useColorScheme();

	const colors = themedColors[theme];

	return {
		colors,
		theme
	};
};
