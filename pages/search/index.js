import {useState} from 'react' 
import {Row, Col, Form, Button} from 'react-bootstrap'
 
 //state for searching record

 
 const [searchRecord, setSearchRecord] = useState("")
    
 //states for results from searching records
 const [recordResult, setRecordResult] = useState([])
 
 
 //search function
     function search(e) {
     e.preventDefault();

     if (records.length > 0) {

         setRecordResult (

             records.filter(record => {

                 //console.log(record), show records inputed in searchRecord form state
                 return(record.description.includes(searchRecord))  

             })
         )
     } else {

         setRecordResult([])

     } 
 }
 

                     <Row>
                     <Col>
                         <Form.Group controlId="searchRecord">
                             <Form.Control type="text" placeholder="Search" value={searchRecord} onChange={e => setSearchRecord(e.target.value)} required/>
                         </Form.Group>
                     </Col>

                     <Col>
                         {
                             searchRecord.length > 0
                             ?
                                 <Button type="submit" id="submitBtn">Search</Button>
                             :
                                 <Button type="submit" id="submitBtn" disabled>Search</Button>
                         }

                     </Col>
                 </Row>