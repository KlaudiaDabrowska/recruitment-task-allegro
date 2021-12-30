import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { Wrapper } from 'assets/styles/App.styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RepositoriesTab } from 'pages/repositories/RepositoriesTab';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Routes>
            <Route path="/repositories/:paramUsername" element={<RepositoriesTab />} />
            <Route path="/" element={<RepositoriesTab />} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default App;
