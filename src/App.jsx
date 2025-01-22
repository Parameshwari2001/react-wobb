import React from 'react'
import Home from './Home'
import Login from './Login'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Trend from './Components/Trend'
import Mamaearth from './Components/Mamaearth'
import Aaruvi from './Components/Aaruvi'
import DotKey from './Components/DotKey'
import Giva from './Components/Giva'
import Meesho from './Components/Meesho'
import Nykka from './Components/Nykka'
import UC from './Components/UC'
import Wow from './Components/Wow'

let rout=createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/trend',
        element:<Trend/>
    },
    {
        path:'/mamaearth',
        element:<Mamaearth/>
    },
    {
        path:'/aaruvi',
        element:<Aaruvi/>
    },
    {
        path:'/dotkey',
        element:<DotKey/>
    },
    {
        path:'/giva',
        element:<Giva/>
    },
    {
        path:'/meesho',
        element:<Meesho/>
    },
    {
        path:'/nykka',
        element:<Nykka/>
    },
    {
        path:'/uc',
        element:<UC/>
    },
    {
        path:'/wow',
        element:<Wow/>
    }

])

const App = () => {
  return (
    <RouterProvider router={rout}/>
  )
}

export default App
