import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { theme } from '../../styles/MainStyles';
import mergeStyles from '../../helpers/mergeStyles';
import { CommonProps } from '../utils/common.model';
import SegmentedControl from '@react-native-community/segmented-control';

const QuoteDisplayScreen: React.FC<CommonProps> = (props: CommonProps) => {
	const { navigation } = props;
	const { colors } = useTheme();
	const textWithColor = mergeStyles(theme.text, colors.text);
	const quoteCategories = [
		'The Force',
		'Jedi and Sith',
		'True Strength',
		'Her Ideals',
		'Manipulations',
		'Echos',
		"One's Own Strength",
		'The Exile',
		"Kreia's Conundrums"
	];

	const [quote, setQuote] = useState('Click "generate" to generate a quote');
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<View style={theme.container}>
			<Text style={textWithColor}>
				<Text style={theme.h1}>Kreia's Wisdom for You:</Text>
				<Text style={theme.h2}>{quote}</Text>
			</Text>
			<Text style={[textWithColor, theme.h2]}>Pick which topic you wan the quote to be about:</Text>
			<SegmentedControl
				values={quoteCategories}
				selectedIndex={selectedIndex}
				onChange={(e) => setSelectedIndex(e.nativeEvent.selectedSegmentIndex)}
			/>
			<Button title="Generate" onPress={() => console.log('Quote generated!')} />
		</View>
	);
};

export default QuoteDisplayScreen;
