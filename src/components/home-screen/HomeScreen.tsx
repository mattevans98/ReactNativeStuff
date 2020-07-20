import React from 'react';
import { View, Text, Button } from 'react-native';
import { HomeScreenProps } from './utils/HomeScreen.model';
import { useTheme } from '@react-navigation/native';
import { theme } from '../../styles/MainStyles';
import mergeStyles from '../../helpers/mergeStyles';

const HomeScreen: React.FC<HomeScreenProps> = (props: HomeScreenProps) => {
	const { navigation } = props;
	const { colors } = useTheme();
	const textWithColor = mergeStyles(theme.text, colors.text);

	return (
		<View style={theme.container}>
			<Text style={[textWithColor, theme.h1]}>Kreia Quote Generator</Text>
			<Button title="Generate Quote" onPress={(): void => console.log('Quote generated')} />
			<Button title="Settings" onPress={(): void => navigation.navigate('Settings')} />
		</View>
	);
};

export default HomeScreen;
