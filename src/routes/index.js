import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Reports from '../pages/Reports';
import Admin from '../pages/Admin';
import NotFound from '../pages/NotFound';
import ErrorPage from '../pages/ErrorPage';

export default function Router() {
  return (
    <div className='content-wrapper'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/notFound' element={<NotFound message={'The requested page does not exist.'} />} />
        <Route path='/errorPage' element={<ErrorPage message={'Something went wrong'} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
