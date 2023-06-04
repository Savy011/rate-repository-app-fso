import { Image, View, StyleSheet, TextStyle } from 'react-native';
import Text from './Text';
import { Repository } from '../types';
import theme from '../theme';

type Props = {
	item: Repository
}

const thousandSuffix = (value: number ) => {
	if (value > 999) return (value / 1000).toFixed(1) + 'k';
	
	return value;
};

const RepositoryItem = ({ item }: Props): JSX.Element => {
	return (
		<View style={styles.container}>
			<View style={styles.repoMain}>
				<Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }}/>
				<View style={styles.repoMainDetails}>
					<Text style={styles.repoName} >{item.fullName}</Text>
					<Text style={styles.repoDescription}>{item.description}</Text>
					<Text style={styles.language}>{item.language}</Text>
				</View>
			</View>
			<View style={styles.repoDetails}>
				<View style={styles.detailsItem}>
					<Text style={styles.detailsHeadingText}>{thousandSuffix(item.stargazersCount)}</Text>
					<Text style={styles.detailsBodyText}>Stars</Text>
				</View>
				<View style={styles.detailsItem}>
					<Text style={styles.detailsHeadingText}>{thousandSuffix(item.forksCount)}</Text>
					<Text style={styles.detailsBodyText}>Forks</Text>
				</View>
				<View style={styles.detailsItem}>
					<Text style={styles.detailsHeadingText}>{item.reviewCount}</Text>
					<Text style={styles.detailsBodyText}>Reviews</Text>
				</View>
				<View style={[styles.detailsItem, styles.detailsItemLast ]}>
					<Text style={styles.detailsHeadingText}>{item.ratingAverage}</Text>
					<Text style={styles.detailsBodyText}>Rating</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	avatar: {
		borderRadius: 20,
		height: 70,
		width: 70,
	},
	container: {
		backgroundColor: theme.colors.white,
		borderRadius: 20,
		marginHorizontal: 15,
		paddingHorizontal: 15,
		paddingTop: 15,
	},
	
	detailsBodyText: {
		color: theme.colors.textSecondary,
		fontSize: theme.fontSizes.subheading,
		fontWeight: theme.fontWeights.normal as TextStyle["fontWeight"],
		textAlign: 'center',
		textAlignVertical: 'center'
	},
	detailsHeadingText: {
		fontSize: theme.fontSizes.subheading,
		fontWeight: theme.fontWeights.bold as TextStyle["fontWeight"],
		textAlign: 'center',
		textAlignVertical: 'center'
	},
	detailsItem: {
		alignItems: 'center',
		borderRightColor: theme.colors.textPrimary,
		borderRightWidth: 1,
		flex: 1,
		justifyContent: 'center',
	},
	detailsItemLast: {
		borderRightColor: theme.colors.none,
		borderRightWidth: 0
	},
	language: {
		backgroundColor: theme.colors.primary,
		borderRadius: 10,
		color: theme.colors.white,
		flex: 1,
		fontSize: theme.fontSizes.bodyTwo,
		paddingHorizontal: 10,
		paddingVertical: 3,
	},
	repoDescription: {
		flex: 2,
		fontSize: theme.fontSizes.bodyTwo,
		paddingVertical: 7,
	},
	repoDetails: {
		alignItems: 'center',
		borderTopColor: theme.colors.textPrimary,
		borderTopWidth: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginTop: 5,
		paddingVertical: 17,
	},
	repoMain: {
		flexDirection: 'row',
		marginBottom: 5
	},
	repoMainDetails: {
		alignItems: 'flex-start',
		flex: 4,
		flexDirection: 'column',
		justifyContent: "center",
		paddingHorizontal: 15,
	},
	repoName: {
		flexGrow: 1,
		fontSize: theme.fontSizes.subheading,
		fontWeight: theme.fontWeights.bold as TextStyle["fontWeight"]
	}
});

export default RepositoryItem;
