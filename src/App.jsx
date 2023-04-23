import { RouterProvider } from 'react-router-dom'
import router from './router';
import { Suspense } from 'react';
import FullAppLoader from './components/Loaders/FullAppLoader';

function App() {
  return <Suspense fallback={<FullAppLoader />} >
    <RouterProvider router={router} />;
  </Suspense>
}

export default App
