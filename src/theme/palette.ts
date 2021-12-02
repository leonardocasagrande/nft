import { PaletteOptions } from '@mui/material';
import { colors } from 'content/colorDefinitions';

const palette: PaletteOptions = {
  primary: {
    main: '#9c27b0',
    light: '#d05ce3',
    dark: '#6a0080',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#424242',
    light: '#6d6d6d',
    dark: '#1b1b1b',
    contrastText: '#FFFFFF',
  },
  error: {
    main: colors.errorMain,
    dark: colors.errorDark,
    light: colors.errorLight,
  },
  warning: {
    main: colors.warningMain,
    dark: colors.warningDark,
    light: colors.warningLight,
  },
  text: {
    primary: colors.textDark,
    secondary: colors.textMain,
    disabled: colors.disabled,
  },
  background: {
    default: colors.secondaryBg,
    paper: colors.primaryBg,
  },
};

export default palette;
