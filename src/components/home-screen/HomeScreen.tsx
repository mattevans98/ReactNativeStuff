import React from 'react';
import { View, Text, Button } from 'react-native';
import { CommonProps } from '../utils/common.model';
import { useTheme } from '@react-navigation/native';
import { theme } from '../../styles/MainStyles';
import mergeStyles from '../../helpers/mergeStyles';

const HomeScreen: React.FC<CommonProps> = (props: CommonProps) => {
	const { navigation } = props;
	const { colors } = useTheme();
	const textWithColor = mergeStyles(theme.text, colors.text);

	return (
		<View style={theme.container}>
			<Text style={[textWithColor, theme.h1]}>Kreia Quote Generator</Text>
			<Button title="Generate Quote" onPress={(): void => navigation.navigate('Quote')} />
			<Button title="Settings" onPress={(): void => navigation.navigate('Settings')} />
		</View>
	);
};

export default HomeScreen;
