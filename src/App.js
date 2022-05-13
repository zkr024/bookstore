import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FrontScreen from './pages/FrontScreen';
import Categories from './pages/Categories';
import NotFound from './pages/NotFound';

import NavBar from './components/navBar/Navbar';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<FrontScreen />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
