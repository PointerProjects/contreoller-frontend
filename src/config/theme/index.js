import { createMuiTheme } from '@material-ui/core';
import { ptBR } from '@material-ui/core/locale';

import 'typeface-montserrat';

export default createMuiTheme(
  {
    palette: {
      primary: {
        main: '#e7ecef',
      },
      secondary: {
        main: '#8b8c89',
      },
    },
    typography: {
      fontFamily: ['Montserrat', 'serif'].join(','),
      fontSize: 14,
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          'html, body': {
            width: '100%',
            WebkitFontSmoothing: 'auto',
            backgroundColor: '#e7ecef',
            display: 'flex',
            justifyContent: 'center',
          },
        },
      },
    },
  },
  ptBR,
);
