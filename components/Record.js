import{useState, useEffect, useContext} from 'react'
import {Card} from 'react-bootstrap'
import moment from 'moment'


// To get the prop, destructure it
export default function Category({recordProp}){

	//  after you get the prop, destructure it para makuha mo yng laman na need mo:
	const {_id, name, type,category, balance, recordedOn, description, amount} = recordProp

	let bago = (moment(recordedOn).format('LLLL')) 

	return(

			<Card className="my-3">
				<Card.Body>
					<Card.Title>
						{name}
					</Card.Title>
					<Card.Text>
						Type: {type}
					</Card.Text>
					<Card.Text>
						Category: {category}
					</Card.Text>
					<Card.Text>
						Date: {bago}
					</Card.Text>
					<Card.Text>
						Amount: ${amount}
					</Card.Text>
					<Card.Text>
						Description: {description}
					</Card.Text>					
					<Card.Title>
						Balance: ${balance}
					</Card.Title>					
				</Card.Body>
			</Card>
		)
}


