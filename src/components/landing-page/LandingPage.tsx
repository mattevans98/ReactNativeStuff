import React from 'react';
import { Switch, Text, View } from 'react-native';
import { LandingPageProps } from './utils/LandingPage.model';

const LandingPage: React.FC<LandingPageProps> = (props: LandingPageProps) => {
	const { isDark, toggleDarkTheme, theme } = props;

	return (
		<View style={theme.container}>
			<Text style={theme.text}>
				<Text style={theme.h1}>Welcome to an unnamed app!{'\n'}</Text>
				<Text style={theme.h2}>Press here to switch to Light or Dark Mode!</Text>
			</Text>
			<Switch onValueChange={toggleDarkTheme} value={isDark} />
		</View>
	);
};

export default LandingPage;
