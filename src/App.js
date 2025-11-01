import './App.css';
import Sidebar from './component/Sidebar';
import Header from './component/Header'


function App() {
  return (
    <div className='body d-flex'>
      <Sidebar />
      <div className="main w-100 px-md-2">
        <Header />
        <div></div>
      </div>
    </div>
  );
}

export default App;
