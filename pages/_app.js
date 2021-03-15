import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import {useState, useEffect} from 'react'
import {Container} from 'react-bootstrap'

import NavBar from '../components/Navbar'

import {UserProvider} from '../userContext'

function MyApp({ Component, pageProps }) {
  // console.log(Component)
  const [user,setUser] = useState({
    email: null,
    id: null
   
  })

  useEffect(()=>{

    setUser({
      email: localStorage.getItem('email'),
      id: localStorage.getItem('id')
    })
  },[])

  const unsetUser = () => {
    localStorage.clear()

    setUser({
      email:null
      
    })
  }
  
  return (
          <>
            <UserProvider value={{user,setUser,unsetUser}}>
            <NavBar />
              <Container>
                <Component {...pageProps} /> 
              </Container>
            </UserProvider>
          </>
      )
}

export default MyApp
