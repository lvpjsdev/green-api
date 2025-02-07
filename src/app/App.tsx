import { Layout } from '@/layouts/Layout';
import { Chats } from '@/pages/Chats';
import { AuthForm } from '@/widgets/AuthForm';
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/chats" element={<Chats />} />
        </Route>
        <Route path="/" element={<AuthForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
