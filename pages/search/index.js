import {useState, useEffect, useContext} from 'react'
import Category from '../../components/Category'
import {Form, Button, Container, Row, Col, Card, Jumbotron} from 'react-bootstrap'
import Swal from 'sweetalert2'

import Router from 'next/router'
//import user context
import UserContext from '../../userContext'

import Record from '../../components/Record'


export default function SearchTransaction(){

const {user} = useContext(UserContext)
console.log(user)

//State for token

const [userToken, setUserToken] = useState({

	setUserToken:null
})

//State for Category Type seletion
const [selection, setSelection] = useState("")


//State for the all records
    const [records,setRecords] = useState([]);

 //State for search
 const [search, setSearch] = useState("")

 //State for second search
 const[secondSearch, setSecondSearch]= useState([]);

 //State for filtered results
 const [filteredResults, setFilteredResults]= useState([])



 useEffect(()=>{

 	fetch('https://limitless-taiga-35551.herokuapp.com/api/users/allTransactions',{
		headers: {
			'Authorization': `Bearer ${localStorage.getItem('token')}`
		}
	})
	.then(res => res.json())
	.then(data=>{

		setSecondSearch(data)
	})

 	


 },[])



 useEffect(()=>{

 	setFilteredResults(
 		secondSearch.filter(results=>{
 			return results.description.toLowerCase().includes(search.toLowerCase())
 		})

 		)


 },[search,secondSearch])


 //useEffect for the Token

      useEffect(()=>{

      setUserToken(localStorage.getItem('token'))


    },[])


 useEffect(() => {

	fetch('https://limitless-taiga-35551.herokuapp.com/api/users/allTransactions',{
		headers: {
			'Authorization': `Bearer ${localStorage.getItem('token')}`
		}
	})
	.then(res => res.json())
	.then(data => {

		
		console.log(data)
		const allArr = []
		const incomesArr = []
		const expensesArr = []

		if(selection === "Income"){
			data.filter(result => {
				if(result.type === "Income"){
					incomesArr.push(result)
				}
			})
			setRecords(incomesArr)
		} else if (selection === "Expense"){
			data.filter(result => {
				if(result.type === "Expense"){
					expensesArr.push(result)
				}
			})
			setRecords(expensesArr)
		} else if (selection === "ALL"){
			data.filter(result => {
				allArr.push(result)
			})
			setRecords(allArr)
		}
	   

		
	})

},[selection])

 const recordsArr = records.map(record => {

	return <Card key={record._id} className="mt-3">
				<Card.Body>
					<Card.Text>Category: {record.category}</Card.Text>
					<Card.Text>{record.type}: {record.amount}</Card.Text>
					<Card.Text>Description: {record.description}</Card.Text>
				</Card.Body>
			</Card>
})



 console.log(records)
     const secondFilter = filteredResults.map(record =>{


     	return <Card key={record._id} className="mt-3">
				<Card.Body>
					<Card.Text>Category: {record.category}</Card.Text>
					<Card.Text>{record.type}: {record.amount}</Card.Text>
					<Card.Text>Description: {record.description}</Card.Text>
				</Card.Body>
			</Card>

     })

	return(


		<>
		<Container>
			<Row>
				<Col xs={12} md={6} className="my-3">

					<Form>
			 			<Form.Group controlId="selectionLabel">
						    <Form.Label><h4>Filter by Category Type</h4></Form.Label>
						    <Form.Control as="select" required value={selection} onChange={e=> setSelection(e.target.value)}>
						      <option value="" disabled >Please Select type</option>
						      <option>ALL</option>
						      <option>Income</option>
						      <option>Expense</option>
						    </Form.Control>
						</Form.Group>
				 </Form>
				</Col>

				

				<Col xs={12} md={6} className="my-3">
					<Jumbotron>
					<h1>Result for Filter:</h1>
						{recordsArr}
					</Jumbotron>	
					
				</Col>
			</Row>
		</Container>
		<Container>
			<Row>
				<Col xs={12} md={6} className="my-3">	
					<Form >	
						<Form.Group controlId="cdesc">
							<Form.Label><h4>Search by Description:</h4></Form.Label>
							<Form.Control type="text" placeholder="Enter Description" value={search} onChange={e=>setSearch(e.target.value)} required/>
						</Form.Group>	
											
			  		</Form>
				</Col>
				<Col xs={12} md={6} className="my-3">
					<Jumbotron>
					<h1>Result for Search By description:</h1>
					{secondFilter}
					</Jumbotron>
				</Col>			
			</Row>
		</Container>
		
		</>
		

		)
}