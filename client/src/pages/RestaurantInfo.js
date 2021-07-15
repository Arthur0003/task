import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { Card } from 'react-bootstrap';
import { Rate } from 'antd';

const RestaurantInfo = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const params = useParams();

    useEffect(() => {
        setLoading(true);
        fetch(`/restaurants/${params.id}`)
            .then((response) => response.json())
            .then((json) => {
                setData(() => json);
                // setRate(json.rate)
            });
        setLoading(false);
    }, [params.id]);

    function changingRate(e) {
        setData((prevState) => {
            return { ...prevState, rate: e };
        });
    }

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <Card style={{ width: '18rem', marginBottom: 10 }}>
                    <Card.Img
                        variant="top"
                        src={data.image}
                        style={{ cursor: 'pointer' }}
                    />
                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Rate
                            style={{ display: 'block' }}
                            allowHalf
                            value={data.rate}
                            onChange={(e) => changingRate(e)}
                        />
                        <Card.Text>
                            <span style={{ display: 'block', fontSize: 30 }}>INFO</span>
                            {data.info}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
};

export default RestaurantInfo;
