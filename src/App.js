import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import routes from './routes';
import { useRoutes } from 'react-router-dom';


function App() {
  const router = useRoutes(routes)
  return (
    <div className='body d-flex'>
      <Sidebar />
      <div className="main w-100 px-md-2">
        <Header />
        {router}
      </div>
    </div>
  );
}

export default App;
