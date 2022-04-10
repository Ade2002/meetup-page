import { Route, Routes } from 'react-router-dom'
import { Header } from "./layouts/Header";
import Home from './components/pages/Home';
import New from './components/pages/New';
import Favorites from './components/pages/Favorites';
import './sass/style.scss'
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
