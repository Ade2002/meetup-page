import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
import New from './components/pages/New';
import Favorites from './components/pages/Favorites';
import './sass/style.scss'
import Layout from './layouts/Layout';
function App() {
  return (
    <Layout>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </Layout>
  );
}

export default App;
