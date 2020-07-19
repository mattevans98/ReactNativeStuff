import React from 'react';
import { View, Text, Button } from 'react-native';
import { HomeScreenProps } from './utils/HomeScreen.model';

const HomeScreen: React.FC<HomeScreenProps> = (props: HomeScreenProps) => {
	const { navigation } = props;

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<Button title="Settings" onPress={(): void => navigation.navigate('Settings')} />
		</View>
	);
};

export default HomeScreen;
