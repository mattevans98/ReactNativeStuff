import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';
import { AppearanceProvider } from 'react-native-appearance';
import LandingPage from './src/components/landing-page/LandingPage';
import styles from './src/styles/MainStyles';
import { useTheme } from './src/hooks/useTheme';
import { LandingPageProps } from './src/components/landing-page/utils/LandingPage.model';
import { StyleSheet } from 'react-native';

const App: React.FC = () => {
	const themeColors = useTheme();
	const { colors, theme } = themeColors;
	const [isDark, setIsDark] = useState(theme === 'dark');

	const themeProps: LandingPageProps = {
		isDark,
		setIsDark,
		colors
	};

	return (
		<View style={[styles.container]}>
			<LandingPage {...themeProps} />
			<StatusBar style="auto" />
		</View>
	);
};

export default () => (
	<AppearanceProvider>
		<App />
	</AppearanceProvider>
);
