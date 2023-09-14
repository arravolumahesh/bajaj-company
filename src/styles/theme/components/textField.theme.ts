import {alpha, Components, Theme} from '@mui/material';

/**
 * @TextFieldVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the button component
 *
 * @see https://mui.com/material-ui/react-text-field/#customization
 */
export const TextFieldVariants: Components<
  Omit<Theme, 'components'>
>['MuiTextField'] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const { color, error, sx: style } = ownerState;
      const { palette } = theme;
      const finalColor = palette[error ? 'error' : color || 'primary'].main;
      return theme.unstable_sx([
        {
          overflow: 'clip',
          '& .MuiInputBase-root': {
            overflow: 'clip',
            height: '48px',
            background: alpha(palette.background.default, 0.8),
            '&.Mui-focused': {
              background: palette.background.default
            }
          },
          '& .MuiInputAdornment-root': {
            color: finalColor
          },
          '& .MuiOutlinedInput-root:hover': {
            'input:not([disabled]) ~ .MuiOutlinedInput-notchedOutline': {
              borderColor: finalColor
            },
            '& .MuiOutlinedInput-notcheOutline': {
              borderColor: finalColor
            }
          }
        },
        ...(Array.isArray(style) ? style : [style])
      ]);
    }
  }
};
