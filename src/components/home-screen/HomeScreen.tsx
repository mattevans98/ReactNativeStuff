import React from 'react';
import { View, Text, Button } from 'react-native';
import { HomeScreenProps } from './utils/HomeScreen.model';
import { useTheme } from '@react-navigation/native';
import { theme } from '../../styles/MainStyles';
import mergeStyles from '../../helpers/mergeStyles';
import { StatusBar } from 'expo-status-bar';

const HomeScreen: React.FC<HomeScreenProps> = (props: HomeScreenProps) => {
	const { navigation } = props;
	const { colors, dark } = useTheme();
	const textWithColor = mergeStyles(theme.text, colors.text);

	return (
		<View style={theme.container}>
			<Text style={[textWithColor, theme.h1]}>Home Screen</Text>
			<Button title="Settings" onPress={(): void => navigation.navigate('Settings')} />
			<StatusBar style={dark ? 'light' : 'dark'} />
		</View>
	);
};

export default HomeScreen;
