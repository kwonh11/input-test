import React from 'react';
import FormContainer from './common/Container';
import JoinForm from './components/JoinForm';
import CssBaseline from '@material-ui/core/CssBaseline'
import {createGlobalStyle} from 'styled-components';


const FontInitializer = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,100;1,300&display=swap');
  font-family: 'Roboto','Noto Sans KR', 'sans-serif';
`;

function App() {
    return (
      <React.Fragment>
        <FontInitializer />
        <CssBaseline />
        <FormContainer>
            <JoinForm />
        </FormContainer>
      </React.Fragment>
    )
};
export default App;