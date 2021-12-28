import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { Wrapper } from 'assets/styles/App.styles';
import { UserNameForm } from 'pages/mainView/Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { List } from 'pages/listView/List';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Routes>
            <Route path="/repositories" element={<List />} />
            <Route path="/" element={<UserNameForm />} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default App;
