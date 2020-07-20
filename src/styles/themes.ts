import { ThemesModel } from './utils/themes.model';

const palette = {
	darkBlue: '#002439', // Used for Dark Theme BG and Light Theme text
	blueHintedWhite: '#e4eff0', // Used for Light Theme BG and Dark Theme text
	midBlue: '#005066', // Used for low-vibrancy accents
	slateBlueGray: '#4e7988', // Misc styles
	skyblue: '#78cce2', // Used for high-vibrancy accents
	redAlert: '#ff3232' // Notification colors
};

export const lightTheme: ThemesModel = {
	dark: false,
	colors: {
		primary: palette.midBlue,
		background: palette.blueHintedWhite,
		card: palette.skyblue,
		text: palette.darkBlue,
		border: palette.slateBlueGray,
		notification: palette.redAlert
	}
};

export const darkTheme: ThemesModel = {
	dark: true,
	colors: {
		primary: palette.skyblue,
		background: palette.darkBlue,
		card: palette.midBlue,
		text: palette.blueHintedWhite,
		border: palette.slateBlueGray,
		notification: palette.redAlert
	}
};
