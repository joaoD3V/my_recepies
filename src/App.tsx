import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/global';
import Routes from './routes';



function App() {
  return (
    <BrowserRouter>
        <GlobalStyles />
        <Routes />
    </BrowserRouter>
  );
}

export default App;
