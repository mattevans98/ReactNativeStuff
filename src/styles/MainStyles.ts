import { StyleSheet } from 'react-native';
import { themedColors } from './themes';

const { light, dark } = themedColors;

const lightStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: light.bgColor,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 16
	},
	text: {
		color: light.standardText,
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
});

const darkStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: dark.bgColor,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 16
	},
	text: {
		color: dark.standardText,
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
});

const useTheme = (isDarkTheme: boolean) => (isDarkTheme ? darkStyles : lightStyles);

export default useTheme;
