import { ThemeProvider } from "styled-components";

const theme = {
    color: {
        primary: '#7F518C',
        light: '#EDEDED',
        dark: '#454545',
        error: '#A23A32',
        accent: '#F5E55B',
    }
};

export const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme;

