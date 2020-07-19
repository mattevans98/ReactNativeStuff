import { ThemesModel } from './utils/themes.model';

const palette = {
	primary: '#7878ff',
	primaryDarkGray: '#1e1e1e',
	secondary: '#00155f',
	borderColor: '#ffffff',
	redAlert: '#ff3232',
	white: '#fff'
};

export const lightTheme: ThemesModel = {
	dark: false,
	colors: {
		primary: palette.primary,
		background: palette.white,
		card: palette.secondary,
		text: palette.primary,
		border: palette.borderColor,
		notification: palette.redAlert
	}
};

export const darkTheme: ThemesModel = {
	dark: true,
	colors: {
		primary: palette.primary,
		background: palette.primaryDarkGray,
		card: palette.secondary,
		text: palette.white,
		border: palette.borderColor,
		notification: palette.redAlert
	}
};
