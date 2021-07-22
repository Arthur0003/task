import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';
import { CardRest } from '../components/CardRest';
import { Loading } from '../components/Loading';
import { WrappedMap } from '../components/Map';

function Main() {
    const history = useHistory();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/restaurants')
            .then((response) => response.json())
            .then((json) => setData(json));
        setLoading(false);
    }, []);

    return (
        <div className="container">
            {loading ? (
                <Loading />
            ) : (
                <>
                    <div style={{ float: 'left' }}>
                        {data.map((item, idx) => {
                            return (
                                <CardRest
                                    key={idx}
                                    item={item}
                                    onClick={() =>
                                        history.push(`/restaurant/${item.id}`)
                                    }
                                />
                            );
                        })}
                    </div>
                    <div>
                        <WrappedMap
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBk0nEIQV81Yg-UkaTeqyKLuMLadqX1jDg"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={
                                <div style={{ height: `400px` }} />
                            }
                            mapElement={<div style={{ height: `100%` }} />}
                            data={data}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default Main;
