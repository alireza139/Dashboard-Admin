import './App.css';
import Sidebar from './components/modules/sidebar/Sidebar';
import Header from './components/modules/header/Header';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';

function App() {
  const router = useRoutes(routes)
  return (
    <div className='body d-flex'>
      <Sidebar />
      <div className="main w-100 px-md-2">
        <Header />
        <div className='mt-2'>
          {router}
        </div>
      </div>
    </div>
  );
}

export default App;
