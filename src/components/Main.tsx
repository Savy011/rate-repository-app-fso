import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.mainBackground,
		flexGrow: 1,
		flexShrink: 1,
		paddingTop: 15,
	},
});

const Main = () => {
	return (
		<>
			<AppBar />
			<View style={styles.container} >
				<RepositoryList />
			</View>
		</>
	);
};

export default Main;
