import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
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
            <div className='header-menu'>
              <div className='header-menu-item'>
                <Link to='/actor'>
                  <span>Actor</span>
                </Link>
              </div>
              <div className='header-menu-item'>
                <span>Poster</span>
              </div>
              <div className='header-menu-item'>
                <span>Accessory</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className='App-content'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/actor' element={<DisplayActor />} />
        </Routes>
      </main>
      <footer className='App-footer'>
        <div className='footer-wrapper'>
          <div className='footer-inner'>
            <p>hello footer</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
