import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import LandingPage from './src/components/LandingPage';
import styles from './src/styles/MainStyles';

const App: React.FC = () => {
	return (
		<View style={styles.container}>
			<LandingPage />
			<StatusBar style="auto" />
		</View>
	);
};

export default App;
