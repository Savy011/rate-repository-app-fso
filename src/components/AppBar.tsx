import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const AppBar = () => {
	return (
		<View style={styles.container}>
			<AppBarTab label="Repositories"/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: theme.colors.textPrimary,
		flexDirection: 'row',
		justifyContent: 'center',
		paddingHorizontal: 16,
		paddingTop: Constants.statusBarHeight + 4,
	},
});

export default AppBar;
