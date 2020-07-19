import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { theme } from '../../styles/MainStyles';
import mergeStyles from '../../helpers/mergeStyles';
import { StatusBar } from 'expo-status-bar';
import { SearchScreenProps } from './utils/SearchScreen.model';

const SearchScreen: React.FC<SearchScreenProps> = (props) => {
	const { navigation } = props;
	const { colors, dark } = useTheme();
	const textWithColor = mergeStyles(theme.text, colors.text);

	const [textContent, setTextContent] = useState('Enter search here');

	return (
		<View style={theme.container}>
			<Text style={[textWithColor, theme.h1]}>Enter search query</Text>
			<TextInput onChangeText={(text) => setTextContent(text)} value={textContent} />
			<Button title="Search" onPress={(): void => console.log('Search button pressed')} />
			<Button title="Back Home" onPress={(): void => navigation.navigate('Home')} />
			<StatusBar style={dark ? 'light' : 'dark'} />
		</View>
	);
};

export default SearchScreen;
