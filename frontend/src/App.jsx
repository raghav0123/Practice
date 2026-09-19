import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { UserForm, PostForm, PostCard, Navbar, Layout, DashBoard } from '../components/index'
import { AppProvider, AppContext } from '../context/AppContext'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppProvider>
        <Router>
          <Routes >
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<DashBoard />}></Route>
              <Route path='/userForm' element={<UserForm />}></Route>
              <Route path='/postForm' element={<PostForm />}></Route>
            </Route>
          </Routes>
        </Router>

      </AppProvider>
    </>
  )
}

export default App
