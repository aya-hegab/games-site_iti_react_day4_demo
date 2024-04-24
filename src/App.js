import { BrowserRouter } from 'react-router-dom';
import Router from './Router/Router';
import './App.css';
import { useSelector } from 'react-redux';

const App = () => {
  const theme = useSelector(state => state.theme.current_active_theme);
  return (
    <div className={theme === 'light' ? 'bg-white': 'bg-dark'}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}
export default App;

// Install react-router-dom
// App => <BrowserRouter > <Routes>  <Route path="" element={} />
// Header / Navbar => <Link .... to="/"></Link>
