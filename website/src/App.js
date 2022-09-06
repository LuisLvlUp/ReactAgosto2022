import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Main } from './components/Main/Main';
import { ThemeContext, themes } from './theme/theme';


function App() {

  const [theme, setTheme] = useState(themes)

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <Main />
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
