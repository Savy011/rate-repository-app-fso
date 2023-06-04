import { Pressable, StyleSheet, TextStyle, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import theme from '../theme';
import Text from './Text';

const AppBarTab = ({ label, path }: { label: string, path: string }) => {
	const NavigateTo = useNavigate();

	return (
		<View style={styles.container}>
			<Pressable onPress={() => NavigateTo(path)}>
				<Text style={styles.text}>{label}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 12,
	},
	text: {
		color: theme.colors.white,
		fontSize: theme.fontSizes.subheading,
		fontWeight: theme.fontWeights.bold as TextStyle["fontWeight"]
	}
});

export default AppBarTab;
