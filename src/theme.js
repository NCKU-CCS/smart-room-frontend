import { theme } from '@chakra-ui/core';
import customerIcons from './Resources/icons';

export default {
  ...theme,
  colors: {
    ...theme.colors,
    green: {
      50: '#e1f9fb',
      100: '#c4e5ea',
      200: '#a4d2da',
      300: '#82c0ca',
      400: '#61aeb9',
      500: '#4894a0',
      600: '#35737d',
      700: '#23525a',
      800: '#0f3238',
      900: '#001217',
    },
    button: '#43A0B2',
    'chevron-right': '#377781',
    thumb: '#018786',
    err: '#E64441',
    grey: {
      10: '#E2E8F0',
      20: '#D8D8D8',
      30: '#404040',
      40: '#F7F7F7',
      50: '#2A2A2A',
      60: '#999999',
      70: '#858585',
    },
    'button-grey': {
      0: '#ffffff',
      50: '#fafafa',
      100: '#f4f4f4',
      200: '#eaeaea',
      300: '#dfdfdf',
      400: '#d5d5d5',
      500: '#cacaca',
      600: '#c0c0c0',
      700: '#b6b6b6',
      800: '#ababab',
      900: '#a1a1a1',
    },
  },
  fonts: {
    body: 'Roboto',
    heading: 'Roboto',
    mono: 'Roboto',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
    'bold-lg': 800,
    'bold-xl': 900,
  },
  lineHeights: {
    normal: 'normal',
    none: '1',
    shorter: '1.25',
    short: '1.375',
    base: '1.5',
    tall: '1.625',
    taller: '2',
  },
  letterSpacings: {
    tighter: '-0.05rem',
    tight: '-0.025rem',
    normal: '0',
    wide: '0.5rem',
    wider: '1.0rem',
    widest: '1.5rem',
  },
  space: {
    px: '1px',
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem',
  },
  sizes: {
    ...theme.space,
    full: '100%',
    7: '1.6rem',
    13: '3.25rem',
    14: '3.5rem',
    '10xs': '1rem',
    '9xs': '2rem',
    '8xs': '4rem',
    '7xs': '6rem',
    '6xs': '8rem',
    '5xs': '10rem',
    '4xs': '12rem',
    '3xs': '14rem',
    '2xs': '16rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
  },
  icons: {
    ...theme.icons,
    ...customerIcons,
  },
};