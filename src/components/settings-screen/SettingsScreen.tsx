import React, { useContext } from 'react';
import { Switch, Text, View, Button } from 'react-native';
import { LandingScreenProps } from './utils/SettingsScreen.model';
import { useTheme } from '@react-navigation/native';
import mergeStyles from '../../helpers/mergeStyles';
import { theme } from '../../styles/MainStyles';
import SettingsContext from '../../contexts/SettingsContext';
import { StatusBar } from 'expo-status-bar';

const SettingsScreen: React.FC<LandingScreenProps> = (props) => {
	const { navigation } = props;
	const { colors, dark } = useTheme();
	const textWithColor = mergeStyles(theme.text, colors.text);
	const settingsContext = useContext(SettingsContext);

	return (
		<View style={theme.container}>
			<Text style={textWithColor}>
				<Text style={theme.h2}>Press here to switch to {dark ? 'Light' : 'Dark'} Mode!</Text>
			</Text>
			<Switch onValueChange={settingsContext} value={dark} />
			<Button title="Back Home" onPress={(): void => navigation.navigate('Home')} />
			<StatusBar style={dark ? 'light' : 'dark'} />
		</View>
	);
};

export default SettingsScreen;
