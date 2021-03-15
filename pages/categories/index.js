import {useState, useEffect, useContext} from 'react'
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap'
import Category from '../..components/Category'
import Swal from 'sweetalert2'
import UserContext from '../../userContext'

export default function Categories(){

const {user}  = useContext(UserContext)
console.log(user)

const [selection, setSelection] = useState("")
}
const [categoryName, setCategoryName]= useState("")

    const [userTOKEN, setUserToken] = useState({
        userToken: null
    })
    useEffect(()=>{
        setUserToken({
            userToken: localStorage.getItem('token')
        })
    })

const categoriesCards = allCategories.map(category=> {
    return(
        <Category key = {category._id} categoryProp = {category}/>>
    )
})



function selectType(e){

e.prevent.Default();

    fetch('http://localhost:8000/api.users/category',{
        method : "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body: JSON.stringify({
            id: user.id,
            name: categoryName,
            type: selection
        })
    })
    .then(res=> res.json())
    .then(data=>{
        if(data){
            Swal.fire({

                icon:"success",
                title:"Successful ",
                text: "Thank you "

            }) 
        } else{
            Swal.fire({

                icon:"error",
                title:"Failed",
                text: "Try again"

            })
        }
    })

}
    return(
        <Container>
            <Row>
                <Col xs={12} md={6} className="my-3">
                    <h4>Add Income / Expense Category</h4>
                    <Form onSubmit ={e=> selectType(e)}>
                    <Form.Group controlId= "cname">
                        <Form.Label>Example select</Form.Label>
                        <Form.Control as="select" value={selection} onChange={e=> setCategoryName(e.target.value)}>
                            <option selected=true disabled></option>
                            <option>Income</option>
                            <option>Expense</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit">Create Category</Button>
                    </Form>
                </Col>

                <Col xs={12} md={6} className="my-3">
                    <h4>Add Income / Expense Category</h4>
            </Row>
        </Container>
    )