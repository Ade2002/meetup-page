import { Route, Routes } from 'react-router-dom'
import { Header } from "./layouts/Header";
import Home from './components/pages/Home';
import './sass/style.scss'
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/home' element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
