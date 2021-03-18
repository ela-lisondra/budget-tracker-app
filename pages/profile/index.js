import {useState,useEffect} from 'react'
import {Form,Button, Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import {Fragment} from 'react'
import PieChart from '../../components/PieChart'
import BarCharts from '../../components/BarCharts'

export default function Profile(){

//		

	const [token,setToken] = useState("")
	const [firstName,setFirstName] = useState("")
	const [lastName,setLastName] = useState("")
	const [email,setEmail] = useState("")
	const [balance, setBalance] = useState(0);
	
	

	useEffect(() => {
		setToken(localStorage.getItem('token'))
	})

	fetch('https://limitless-taiga-35551.herokuapp.com/api/users/details',{
		headers: {
			'Authorization': `Bearer ${token}`
		}
	})
	.then(res => res.json())
	.then(data => {
		setFirstName(data.firstName)
		setLastName(data.lastName)
		setEmail(data.email)
		setBalance(data.balance)
		
	})
	


	return(
		<Fragment>

			<div class="container d-flex justify-content-center">
			    <div class="card mt-5 px-4 pt-5 pb-4">
			        <div class="name">
			            <h4>{firstName} {lastName}</h4>
			            <div class="d-flex flex-row"> <small class="text-muted">{email}</small> <i class="fas fa-check ml-2"></i> 
			            </div>
			            <div class="d-flex flex-row justify-content-between mt-4 pr-4">
			               
			                <div class="d-flex flex-column align-items-center"><small class="text-muted">Current Balance:</small>
			                    <h5>&#8369; {balance}</h5>
			                </div>
			                
			            </div>
			        </div>
			    </div>

			</div>

			<div class="container my-5">
				<div>
				    <BarCharts />
				</div>
				<div class="container my-5">	
					<PieChart />
				</div>	
			</div>

			
		</Fragment>
	)
}
