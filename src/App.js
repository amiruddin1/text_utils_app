import './App.css';
import Navbar from './Components/Navbar';
import Bodypart from './Components/Bodypart';
import HomePage from './Components/HomePage';
import AboutUs from './Components/AboutUs';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import PagenotFound from './Components/PagenotFound';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar title="Amiruddin Samlayawala"/>
      <Bodypart/>
      <div className='container my-3'>
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/about' element={<AboutUs />}/>
            <Route path='/*' element={<PagenotFound />}/>
          </Routes>
      </div>
        </BrowserRouter>
    </>
  );
}

export default App;
