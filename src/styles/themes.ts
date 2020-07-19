import { ThemesModel } from './utils/themes.model';

const palette = {
	primaryGreen: '#66ff68',
	primaryDarkGray: '#1e1e1e',
	secondaryGreen: '#145a0a',
	borderColor: '#8bff8b',
	redAlert: '#ff3232',
	white: '#fff'
};

export const lightTheme: ThemesModel = {
	dark: false,
	colors: {
		primary: palette.primaryGreen,
		background: palette.white,
		card: palette.secondaryGreen,
		text: palette.primaryDarkGray,
		border: palette.borderColor,
		notification: palette.redAlert
	}
};

export const darkTheme: ThemesModel = {
	dark: true,
	colors: {
		primary: palette.primaryGreen,
		background: palette.primaryDarkGray,
		card: palette.secondaryGreen,
		text: palette.white,
		border: palette.borderColor,
		notification: palette.redAlert
	}
};
