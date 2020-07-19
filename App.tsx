import React, { useState } from 'react';
import SettingsScreen from './src/components/settings-screen/SettingsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/home-screen/HomeScreen';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { darkTheme, lightTheme } from './src/styles/themes';
import SettingsContext from './src/contexts/SettingsContext';

const App: React.FC = () => {
	const scheme = useColorScheme();

	const [theme, setTheme] = useState(scheme === 'dark' ? darkTheme : lightTheme);
	const toggleTheme = () => {
		setTheme(theme.dark ? lightTheme : darkTheme);
	};

	const Stack = createStackNavigator();

	return (
		<AppearanceProvider>
			<SettingsContext.Provider value={() => toggleTheme()}>
				<NavigationContainer theme={theme}>
					<Stack.Navigator initialRouteName="Home">
						<Stack.Screen name="Home" component={HomeScreen} />
						<Stack.Screen name="Settings" component={SettingsScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			</SettingsContext.Provider>
		</AppearanceProvider>
	);
};

export default App;
