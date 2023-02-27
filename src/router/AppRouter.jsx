import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalPage } from '../journal/pages/JournalPage';
import { CheckingAuth } from '../ui/components/CheckingAuth';
import { useCheckAuth } from '../hooks';

export const AppRouter = () => {
  const status = useCheckAuth();

  if (status === 'checking') {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === 'authenticated' ? (
        <Route path='/*' element={<JournalPage />} />
      ) : (
        <Route path='/auth/*' element={<AuthRoutes />} />
      )}

      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  );
};
