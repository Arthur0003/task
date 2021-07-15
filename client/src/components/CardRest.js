import React from 'react';
import {Card} from 'react-bootstrap';
import {Rate} from "antd";
import 'antd/dist/antd.css'

export const CardRest = ({item, onClick}) => {
    return (
        <Card style={{width: '18rem', marginBottom: 10}} >
            <Card.Img onClick={() => onClick()}
                variant="top"
                src={item.image}
                style={{cursor: 'pointer'}}
            />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Rate style={{display: "block"}} allowHalf value={item.rate} disabled  onChange={(e) => console.log(e)}/>
                <Card.Text>

                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>

            </Card.Body>
        </Card>
    );
};

