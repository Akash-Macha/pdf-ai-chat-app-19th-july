import { Suspense, lazy } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import NotFound from './components/NotFound/NotFound';
import Loader from './components/Loader/Loader';
import PdfUploadScreen from './components/PdfUploadScreen/PdfUploadScreen';
const LandingPage = lazy(() => import('./components/LandingPage'))
const ChatScreen = lazy(() => import('./components/ChatScreen/ChatScreen'))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    }
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<Loader color="#36d7b7" />}><LandingPage /></Suspense>,
    errorElement: <NotFound />,
  },
  {
    path: "/pdf-upload",
    element: <Suspense fallback={<Loader color="#36d7b7" />}><PdfUploadScreen /></Suspense>,
    errorElement: <NotFound />,
  },
  {
    path: "/chat-with-pdf",
    element: <Suspense fallback={<Loader color="#36d7b7" />}><ChatScreen /></Suspense>,
    errorElement: <NotFound />,
  }
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
};

export default App
