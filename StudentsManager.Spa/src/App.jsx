import { Route, Routes } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import SlidoPage from './pages/SlidoPage';

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} exact />
        {isLoggedIn ? (
          <>
            <Route path='/profile' element={<ProfilePage />} />
          </>
        ) : (
          <>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/slido' element={<SlidoPage />} />
          </>
        )}
      </Routes>
    </Layout>
  );
}

export default App;