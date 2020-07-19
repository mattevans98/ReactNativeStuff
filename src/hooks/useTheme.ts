import { ColorSchemeName, useColorScheme } from 'react-native';
import { themedColors } from '../styles/themes';

interface UseThemeReturnObject {
	colors: {
		[key: string]: string;
	};
	theme: ColorSchemeName;
}

export const useTheme = (): UseThemeReturnObject => {
	const theme = useColorScheme();

	const colors = theme ? themedColors[theme] : themedColors.default;

	return {
		colors,
		theme
	};
};
