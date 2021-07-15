import React from 'react';
import { useHistory } from 'react-router-dom';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

const Map = (props) => {
    const history = useHistory();
    return (
        <GoogleMap defaultZoom={14.5} defaultCenter={{ lat: 40.179188, lng: 44.499104 }}>
            {props.data.map((element, index) => {
                return (
                    <Marker
                        position={element.position}
                        onClick={() => history.push(`/restaurant/${element.id}`)}
                        key={index}
                        label={element.title}
                        clickable
                    />
                );
            })}
        </GoogleMap>
    );
};

export const WrappedMap = withScriptjs(withGoogleMap(Map));
