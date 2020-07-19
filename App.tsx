import React, { useState } from 'react';
import SettingsScreen from './src/components/settings-screen/SettingsScreen';
import { LandingScreenProps } from './src/components/settings-screen/utils/SettingsScreen.model';
import useTheme from './src/styles/MainStyles';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/home-screen/HomeScreen';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

const App: React.FC = () => {
	const [isDark, setIsDark] = useState(false);
	const toggleDarkTheme = () => {
		setIsDark((prevState) => !prevState);
	};

	const theme = useTheme(isDark);
	const scheme = useColorScheme();

	const themeProps: LandingScreenProps = {
		isDark,
		toggleDarkTheme,
		theme
	};

	const Stack = createStackNavigator();

	return (
		<AppearanceProvider>
			<NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
				<Stack.Navigator initialRouteName="Home">
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="Settings" component={SettingsScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</AppearanceProvider>
	);
};

export default App;
