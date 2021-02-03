import { ToastProvider } from 'react-toast-notifications';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <ToastProvider placement="bottom-left">
      <div className="container mx-auto min-h-screen">
        <div className="flex flex-col">
          <Header />
          <Main />
        </div>
      </div>
    </ToastProvider>
  );
}

export default App;
