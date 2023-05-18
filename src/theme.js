import { createTheme } from '@mui/material/styles';

// Util para importar mas de una vez (En vez de usar "Export default")
export const theme = createTheme({
    palette: {
        mode: 'dark',
    },
    // Customize typography, we use the object notation as said by the Documentation.
    typography: {
        h1: {
            fontSize: "16px"
        }
    }
});
