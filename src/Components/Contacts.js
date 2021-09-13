import React, {useState} from 'react';
// React-Bootstrap
import {Card, Button} from 'react-bootstrap';

const Cards = (props) => {
    // Using Hook (useState)
   
   const [age, setAge] = useState(true);


        return(
            <div>
                {/* User Details */}
                <Card>
                    <Card.Img variant="top" src={props.image} alt="user-image"/>
                        <Card.Body>
                            <Card.Title>{props.header}</Card.Title>
                                <Card.Text>
                                    <p>Name:{props.name}</p>
                                    <p>Email:{props.email}</p>
                                    <p>Nationality:{props.nationality} </p>
                                    {age && <p>Age: {props.age}</p>}
                                </Card.Text>
                                <Button variant="primary" size="lg" active id="button" onClick={() => setAge(!age)}>Toggle Age</Button>
                        </Card.Body>
                </Card>
            </div>
        );
}

export default Cards;
