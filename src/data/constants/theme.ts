import { extendTheme } from '@chakra-ui/react';
import theme from '@chakra-ui/theme';
import { mode } from '@chakra-ui/theme-tools';
import { setSize } from '../../utils';

import { Colors } from './colors';
import { Sizes } from './sizes';

const breakPoint = `@media only screen and (min-width: ${Sizes.breakPoint}px)`;

const linkHover = {
	...theme.components.Link.baseStyle._hover,
	color: `blue.400`,
	textDecoration: 'none',
};

export const animatedLinkHover = {
	...linkHover,
	transform: `translateY(-${setSize(0.15)})`,
	transition: `all 0.25s cubic-bezier(0.645,0.045,0.355,1)`,
};

export const customTheme = extendTheme({
	components: {
		Button: {
			baseStyle: {
				_focus: {
					boxShadow: `0 0 0 0.1rem rgb(255 255 255 / 90%)`,
				},
			},
			variants: {
				ghost: props => ({
					...theme.components.Button.variants.ghost(props),
					_hover: {
						bg: mode(
							Colors.light.surfaceColor,
							Colors.dark.surfaceColor
						)(props),
					},
				}),
				outline: props => ({
					...theme.components.Button.variants.outline(props),
					_hover: {
						bg: `whiteAlpha.200`,
					},
				}),
				solid: props => ({
					...theme.components.Button.variants.solid(props),
					_hover: {
						bg: `blue.400`,
					},
					bg: 'blue.600',
				}),
			},
		},
		Link: {
			baseStyle: {
				_focus: {
					boxShadow: 'none',
				},
				_hover: linkHover,
			},
		},
		Text: {
			baseStyle: {
				fontWeight: 'light',
				letterSpacing: 'wide',
			},
		},
	},
	styles: {
		global: props => ({
			':root': {
				'--defaultFontSize': '100%',
			},
			body: {
				'&::-webkit-scrollbar': {
					width: setSize(0.4),
				},
				'&::-webkit-scrollbar-thumb': {
					bgColor: mode(
						Colors.light.secondaryTextColor,
						Colors.dark.secondaryTextColor
					)(props),
					borderRadius: setSize(Sizes.borderRadius),
				},
				bg: mode(Colors.light.bgColor, Colors.dark.bgColor)(props),
				color: mode(
					Colors.light.primaryTextColor,
					Colors.dark.primaryTextColor
				)(props),
				fontFamily: '"Roboto", sans-serif',
			},
			html: {
				fontSize: 'var(--defaultFontSize)',
				[breakPoint]: {
					':root': {
						'--defaultFontSize': '112.5%',
					},
				},
				'@media only screen and (min-width: 1024px)': {
					':root': {
						'--defaultFontSize': '125%',
					},
				},
			},
		}),
	},
});
