import {useState, useEffect, useContext} from 'react'
import Record from '../../components/Record'
import {Form, Button, Container, Row, Col, Card} from 'react-bootstrap'
import Swal from 'sweetalert2'

import Router from 'next/router'
//import user context
import UserContext from '../../userContext'

export default function AddRecord(){

const {user} = useContext(UserContext)
console.log(user)

const [selection, setSelection] = useState("Income")
const [type , setType] = useState("")
const [category , setCategory] = useState("")
const [description, setDescription] = useState("")
const [price, setPrice] = useState("")

//State for the token
    const [userToken,setUserToken] = useState({
  
       userToken: null
    })

 //useEffect for the Token
      useEffect(()=>{
      setUserToken(localStorage.getItem('token'))

    },[])

const [allRecords, setAllRecords] = useState([])

useEffect(()=>{

	fetch('http://localhost:8000/api/users/allCategories',{
		headers: {
			'Authorization': `Bearer ${localStorage.getItem('token')}`
		}
	})
	.then(res=> res.json())
	.then(data =>{

		console.log(data)
		setAllRecords(data)
	})
},[])

console.log(allRecords)

const recordsCards = allRecords.map(record=>{
	return(

		 	<Record key = {record._id} recordProp = {record} />
		)
})

function  selectType(e){

e.preventDefault();
console.log('userToken', userToken)
console.log('selection',selection)
console.log('recordName',recordName)

fetch('http://localhost:8000/api/users/record',{
	method :'POST',
	headers: {
		'Content-Type':'application/json',
		'Authorization': `Bearer ${userToken}`
	},

	body: JSON.stringify({
		id:  user.id,
		name: categoryName,
		type: selection 

	})
})

.then(res => res.json())
.then(data =>{

	console.log(data)


	if(data){

		Swal.fire({

            icon: "success",
            title: " New record name successfully created.",
            text: "Thank you."
        })
        Router.reload();

	}else{

        Swal.fire({

            icon: "error",
            title: "Creation failed",
            text: "Please try again."
        })			
	}


})
			setCategoryName("");
			setSelection("Income");


}

	return(
		<Container>
			<Row>
				<Col xs={12} md={6} className="my-3">
					<h4>Add Income / Expense Category</h4>
					<Form onSubmit ={e => selectType(e)}>
                        <Form.Group controlId="selectionLabel">
							<Form.Label>Category Type</Form.Label>
							<Form.Control as="select" value={selection} onChange={e=> setSelection(e.target.value)}>
							      
							    <option>Income</option>
							    <option>Expense</option>
							</Form.Control>
                        </Form.Group>
						<Form.Group controlId="cname">
							<Form.Label>Category  Name:</Form.Label>
							<Form.Control type="text" placeholder="Enter Category Name"  value={recordName} onChange={e=> setCategoryName(e.target.value)} required/>
						</Form.Group>
						<Form.Group controlId="selectionLabel">
							<Form.Label>Amount</Form.Label>
							<Form.Control as="select" value={selection} onChange={e=> setSelection(e.target.value)}>
	
							</Form.Control>
  						</Form.Group>
							
							<Button variant="primary" type="submit">Create Category</Button>								
							
			  		</Form>
				</Col>
				<Col xs={12} md={6} className="my-3">
				<h4>Categories Overview</h4>
					{categoriesCards}
				</Col>
			</Row>
		</Container>
		)
}
