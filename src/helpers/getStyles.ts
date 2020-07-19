import { lightTheme, darkTheme } from '../styles/themes';

const getStyles = (theme: string | null) => {
	const activeTheme = theme === 'dark' ? darkTheme : lightTheme;

	const { colors } = activeTheme;

	return {
		container: {
			flex: 1,
			backgroundColor: colors.background,
			alignItems: 'center',
			justifyContent: 'center',
			paddingHorizontal: 16
		},
		text: {
			color: colors.text,
			marginBottom: 16
		},
		h1: {
			fontSize: 30,
			textAlign: 'center'
		},
		h2: {
			fontSize: 20,
			textAlign: 'center'
		}
	};
};

export default getStyles;
