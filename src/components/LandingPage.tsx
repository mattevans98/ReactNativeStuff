import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export const LandingPage: React.FC = () => {
	const colors = useTheme();

	const [isDark, setIsDark] = useState(false);
	const toggleTheme = (): void => setIsDark((prevState) => !prevState);

	return (
		<View>
			<Text>Welcome to an unnamed finance app!</Text>
			<Text>Press here to switch to Light or Dark Mode!</Text>
			<Switch onValueChange={toggleTheme} value={isDark} />
		</View>
	);
};

export default LandingPage;
