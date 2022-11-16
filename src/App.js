import {createBrowserRouter} from 'react-router-dom'

import Private from './routes/Private'

import Home from './pages/Home'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Error from './pages/Error'
import SocialNetwork from './pages/SocialNetwork'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/admin',
    element: <Private><Admin/></Private>
  },
  {
    path: '/admin/social',
    element: <Private><SocialNetwork/></Private>
  },
  {
    path:'*',
    element: <Error/>
  }
])

export{ router };

// export default function App(){
//   return(
//     <div>
//       <h1>RAIZTECH - PROGRAMMING</h1>
//       {/* <Student name="Ensei Tankado" curse="Developer" />
//       <Student name="Phi Faith" curse="Programming" /> */}
//     </div>
//   )
// }

/*function Student({name, curse}){
  return(
    <div>
      <h2>Wellcome {name} to RaizTech</h2>
      <h3>Your Curse is {curse}</h3>
    </div>
  )
}*/