import 'bootstrap/dist/css/bootstrap.min.css'
//CSS
import '../styles/globals.css'

//react
import {Fragment, useState, useEffect} from 'react'

// import BS components
import {Container} from 'react-bootstrap'

//components
import NavBar from '../components/NavBar'


//import UserProvider
import {UserProvider} from '../userContext'

function MyApp({ Component, pageProps }) {

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


	const unsetUser = () =>{

		//clear the localSorage
		localStorage.clear()

		setUser({
			email: null
		})
	}



  return (
  		<Fragment>
  			<UserProvider value ={{user,setUser,unsetUser}}>
  			<NavBar />
  			<Container fluid>	
  				<Component {...pageProps} />
  			</Container>
  			</UserProvider>
  		</Fragment>
  	)
}

export default MyApp
