import { extendTheme } from '@chakra-ui/react';
import theme from '@chakra-ui/theme';
import { mode } from '@chakra-ui/theme-tools';
import { setSize } from '../../utils';

import { Colors } from './colors';
import { Sizes } from './sizes';

const breakPoint = `@media only screen and (min-width: ${Sizes.breakPoint}px)`;

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
			},
		},
		Link: {
			baseStyle: {
				_focus: {
					boxShadow: 'none',
				},
				_hover: {
					textDecoration: `none`,
				},
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
						Colors.light.highlight.hover,
						Colors.dark.highlight.normal
					)(props),
					borderRadius: setSize(Sizes.borderRadius),
				},
				bg: mode(Colors.light.bgColor, Colors.dark.bgColor)(props),
				color: mode(
					Colors.light.primaryTextColor,
					Colors.dark.primaryTextColor
				)(props),
				fontFamily: '"Nunito", sans-serif',
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
