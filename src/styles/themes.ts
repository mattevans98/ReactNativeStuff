const palette = {
	primaryGreen: '#66ff68',
	primaryDarkGray: '#1e1e1e',
	white: '#fff'
};

const colors = {
	standardText: palette.primaryDarkGray,
	bgColor: palette.white,
	primaryAccent: palette.primaryGreen
};

export const themedColors = {
	light: {
		...colors
	},
	dark: {
		standardText: palette.white,
		bgColor: palette.primaryDarkGray,
		primaryAccent: palette.primaryGreen
	}
};
