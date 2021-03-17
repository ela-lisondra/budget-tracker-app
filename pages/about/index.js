import {Card, Button,Container} from 'react-bootstrap'
import {useEffect, useContext, useState} from 'react'
import Swal from 'sweetalert2'
import Router from 'next/router'
import {Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'


export default function About(){

	return(
		<Fragment>
			<Card style={{ position: 'fixed', left: '50%', top: '50%',
       					 transform: 'translate(-50%, -50%)'}}>
			   <Card.Body className="text-center">
			   <Image src="/ela-jump.jpg" alt="Creator of Tpido" width={350} height={350} className="ABBA"/>
			    <Card.Title>Money CAN buy you happiness.</Card.Title>
			    <Card.Subtitle className="mb-2 text-muted">Hi! My name is Ela. I am an actor-coder and I've created this app to help you keep track of your finances. It keeps records of your income and expenses. It also shows you your balance and history.</Card.Subtitle>
				    <Card.Text>
					      <p>In the wise words of Britney Spears..</p>
							
							<p>You want a hot body? You want a Bugatti?
                                You want a Maserati? You better work bitch
                                You want a Lamborghini? Sippin' martinis?
                                Look hot in a bikini? You better work bitch
                                You wanna live fancy? Live in a big mansion?
                                Party in France?
                                You better work bitch!</p>
			    	</Card.Text>
			    <Card.Link href="#"></Card.Link>
			    <Card.Link href="#"></Card.Link>
			  </Card.Body>
			</Card>
		</Fragment>
	)
}