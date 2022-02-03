import { Routes, BrowserRouter, Route } from 'react-router-dom';
import CardProfile from './components/CardProfile';
import { SideBarMenu } from "./components/SideBarMenu/SideBarMenu"
import NotFound from './pages/NotFound';
import Paths from './routers/Paths';
function App() {
  return (
    <>
    <BrowserRouter>
      <SideBarMenu items={Paths} card={CardProfile} ></SideBarMenu>
      {/* <Routes>
        {
          Paths.map(path => 
            <Route path={path.url} element={<path.element />} />
          )
        }
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </BrowserRouter>
    </>
  );
}

export default App;
