import{useState, useEffect, useContext} from 'react'
import {Card} from 'react-bootstrap'


// To get the prop, destructure it
export default function Record({recordProp}){

	//  after you get the prop, destructure it para makuha mo yng laman na need mo:
	const {_id, name, type, date, balance} = recordProp

	return(

			<Card className="my-3">
				<Card.Body>
					<Card.Title>
						{name}
					</Card.Title>
					<Card.Text>
						{type}
					</Card.Text>
                    <Card.Text>
						{category}
					</Card.Text>
                    <Card.Text>
						{date}
					</Card.Text>
                    <Card.Text>
						{balance}
					</Card.Text>
					<Button variant="primary">Add</Button>
				</Card.Body>
			</Card>
		)
}