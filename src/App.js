import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HeaderMenu from './components/HeaderMenu';
import Home from './components/Home';
import DisplayActor from './components/Actor';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='header-wrapper'>
          <div className='header-inner'>
            <h1 className='header-logo'>
              <Link to='/'>
                <span>YUMESUTE DB</span>
              </Link>
            </h1>
            <HeaderMenu />
          </div>
        </div>
      </header>
      <main className='App-content'>
        <div className='content-wrapper'>
          <div className='content-inner'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/actor' element={<DisplayActor />} />
            </Routes>
          </div>
        </div>
      </main>
      <footer className='App-footer'>
        <div className='footer-wrapper'>
          <div className='footer-inner'>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
