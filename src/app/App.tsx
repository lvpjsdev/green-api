import { Chats } from '@/pages/Chats';
import { AuthForm } from '@/widgets/AuthForm';
import './App.css';
import { useAppStore } from './store/store';

function App() {
  const { isAuth } = useAppStore.use.user();
  return (
    <>
      {isAuth ? (
        <div>
          <Chats />
        </div>
      ) : (
        <AuthForm />
      )}
    </>
  );
}

export default App;
