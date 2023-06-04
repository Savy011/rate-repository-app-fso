import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const AppBar = () => {
	return (
		<View style={styles.container}>
			<ScrollView horizontal>
				<AppBarTab label="Repositories" path="/"/>
				<AppBarTab label="Sign-In" path="/signin"/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: theme.colors.textPrimary,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		paddingHorizontal: 16,
		paddingTop: Constants.statusBarHeight + 4,
	},
});

export default AppBar;
