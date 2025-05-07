import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserIndex } from './components/user-index';
import { UserLogin } from './components/user-login';
import { UserRegister } from './components/user-register';
import { UserDashboard } from './components/user-dashboard';
import { AddTask } from './components/add-task';
import { EditTask } from './components/edit-task';
import { DeleteTask } from './components/delete-task';

function App() {
  return (
    <div className="container-fluid">
         <BrowserRouter>
            <header className='bg-danger text-white p-2 text-center'>
                <h2>Task Tracker</h2>
            </header>

            <section>

               <Routes>
                   <Route path='/' element={<UserIndex />} />
                   <Route path='user-login' element={<UserLogin />} />
                   <Route path='user-register' element={<UserRegister />} />
                   <Route path='user-dash' element={<UserDashboard/>} />
                   <Route path='add-task' element={<AddTask/>} />
                   <Route path='edit-task' element={<EditTask/>} />
                   <Route path='edit-task/:id' element={<EditTask />} />
                   <Route path='delete-task/:id' element={<DeleteTask />} />
               </Routes>

            </section>
         </BrowserRouter>
    </div>
  );
}

export default App;

