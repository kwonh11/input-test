import React from 'react';
import FormContainer from './common/Container';
import JoinForm from './components/JoinForm';
import CssBaseline from '@material-ui/core/CssBaseline'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: `"Arial", "NotoSansCJKkr"`
    }
  })
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <FormContainer>
            <JoinForm />
        </FormContainer>
      </MuiThemeProvider>
    )
};
export default App;