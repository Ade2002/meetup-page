import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/pages/LandingPage';
import Home from './components/pages/Home';
import New from './components/pages/New';
import Favorites from './components/pages/Favorites';
import './sass/style.scss'
import Layout from './layouts/Layout';

function App() {
  return (
    <Layout>
      <>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </>
    </Layout>
  );
}

export default App;
