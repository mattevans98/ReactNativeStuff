import { StyleSheet } from 'react-native';

// @ts-ignore
const mergeStyles = (style, colors) => {
	const textColor = StyleSheet.create({
		text: {
			color: colors
		}
	});

	return StyleSheet.compose(style.text, textColor).text;
};

export default mergeStyles;
