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
	default: {
		...colors
	},
	light: {
		...colors
	},
	dark: {
		...colors,
		standardText: palette.white,
		bgColor: palette.primaryDarkGray
	}
};
