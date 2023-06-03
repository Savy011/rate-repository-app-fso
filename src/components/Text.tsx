import { Text as NativeText, StyleSheet, TextStyle, StyleProp } from 'react-native';

import theme from '../theme';

interface Props {
	color?: string,
	fontSize?: string,
	fontWeight?: string,
	style?: StyleProp<TextStyle>,
	children?: React.ReactNode

}

const styles = StyleSheet.create({
	colorPrimary: {
		color: theme.colors.primary
	},
	colorTextSecondary: {
		color: theme.colors.textSecondary
	},
	fontSizeSubheading: {
		fontSize: theme.fontSizes.subheading,
	},
	fontWeightBold: {
		fontWeight: theme.fontWeights.bold as TextStyle["fontWeight"],
	},
	text: {
		color: theme.colors.textPrimary,
		fontFamily: theme.fonts.main,
		fontSize: theme.fontSizes.body,
		fontWeight: theme.fontWeights.normal as TextStyle["fontWeight"]
	},
});


const Text = ({ color, fontSize, fontWeight, style, children, ...props }: Props): JSX.Element => {
	const textStyle = [
		styles.text,
		color === 'textSecondary' && styles.colorTextSecondary,
		color === 'primary' && styles.colorPrimary,
		fontSize === 'subheading' && styles.fontSizeSubheading,
		fontWeight === 'bold' && styles.fontWeightBold,
		style
	];

	return <NativeText style={textStyle} {...props}>{children}</NativeText>;
};

export default Text;
