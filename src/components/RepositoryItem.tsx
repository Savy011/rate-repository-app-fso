import { View } from "react-native";
import Text from "./Text";
import { Repository } from "../types";

type Props = {
	item: Repository
}

const RepositoryItem = ({ item }: Props): JSX.Element => {
	return (
		<View>
			<Text>Full Name: {item.fullName}</Text>
			<Text>Description: {item.description}</Text>
			<Text>Language: {item.language}</Text>
			<Text>Stars: {item.stargazersCount}</Text>
			<Text>Forks: {item.forksCount}</Text>
			<Text>Reviews: {item.reviewCount}</Text>
			<Text>Average Rating: {item.ratingAverage}</Text>
		</View>
	);
};

export default RepositoryItem;
