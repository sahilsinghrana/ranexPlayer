import { RouterProvider } from 'react-router-dom'
import router from './router';
import { Suspense } from 'react';
import FullAppLoader from './components/Loaders/FullAppLoader';
import useSystemThemeListener from "./hooks/useSystemThemeListener";
import useTheme from "./hooks/useTheme";

function App() {
  useSystemThemeListener();
  const theme = useTheme();
  return (
    <div className={`${theme}`}>
      <Suspense fallback={<FullAppLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App
