import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';
import LandingPage from './src/components/landing-page/LandingPage';
import { LandingPageProps } from './src/components/landing-page/utils/LandingPage.model';
import useTheme from './src/styles/MainStyles';

const App: React.FC = () => {
	const [isDark, setIsDark] = useState(false);
	const toggleDarkTheme = () => {
		console.log('Setting theme state');
		setIsDark((prevState) => !prevState);
	};

	const theme = useTheme(isDark);

	const themeProps: LandingPageProps = {
		isDark,
		toggleDarkTheme,
		theme
	};

	return (
		<View style={theme.container}>
			<LandingPage {...themeProps} />
			<StatusBar style="auto" />
		</View>
	);
};

export default App;
