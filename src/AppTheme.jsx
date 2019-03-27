import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import blueGrey from '@material-ui/core/colors/blueGrey';
import red from '@material-ui/core/colors/red';
import backgroundImage from './assets/background_dark.jpg';


export const AppTheme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: indigo,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  // Style override for material components
  overrides: {
  }
});

export const AppAssets = {
  appBackgroundImage: backgroundImage
}
