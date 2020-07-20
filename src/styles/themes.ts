import { ThemesModel } from './utils/themes.model';

const palette = {
	primaryGreen: '#01bf3a', // Main Accent Colors
	primaryDarkGray: '#140f0a', // Used for high-contrast text and Dark Mode BG
	primaryBrown: '#665028', // Light Mode BG Color
	secondaryBrown: '#3c2d1e', // Secondary brown accents
	secondaryGreen: '#008719', // Secondary green accents
	tertiaryGreen: '#9EE992', // Borders and tertiary accents
	tertiaryBrown: '#826953',
	redAlert: '#ff3232', // Notification colors
	white: '#fff' // Used for high-contrast text
};

export const lightTheme: ThemesModel = {
	dark: false,
	colors: {
		primary: palette.primaryGreen,
		background: palette.primaryBrown,
		card: palette.secondaryBrown,
		text: palette.white,
		border: palette.secondaryGreen,
		notification: palette.redAlert
	}
};

export const darkTheme: ThemesModel = {
	dark: true,
	colors: {
		primary: palette.primaryGreen,
		background: palette.primaryDarkGray,
		card: palette.secondaryBrown,
		text: palette.white,
		border: palette.secondaryGreen,
		notification: palette.redAlert
	}
};
