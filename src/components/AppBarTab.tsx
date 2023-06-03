import { Pressable, StyleSheet, TextStyle, View } from "react-native";
import theme from "../theme";
import Text from "./Text";

const AppBarTab = ({ label }: { label: string }) => {
	return (
		<View style={styles.container}>
			<Pressable>
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
