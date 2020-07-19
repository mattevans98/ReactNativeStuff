import React from 'react';
import { Switch, Text, View } from 'react-native';
import { LandingPageProps } from './utils/LandingPage.model';

const LandingPage: React.FC<LandingPageProps> = (props: LandingPageProps) => {
	const { isDark, setIsDark, colors } = props;
	const toggleTheme = (): void => setIsDark((prevState: boolean) => !prevState);

	return (
		<View>
			<Text>Welcome to an unnamed finance app!</Text>
			<Text>Press here to switch to Light or Dark Mode!</Text>
			<Switch onValueChange={toggleTheme} value={isDark} />
		</View>
	);
};

export default LandingPage;
