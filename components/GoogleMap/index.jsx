import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap = (props) => {
    const { center = {}, zoom = 11 } = props;

    return (
        <div style={{ height: '100vh', width: '100%' }} className={'google-react'}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBQKU00HuGXQn5dUpXgglymajiA3O7z3e4' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
};

SimpleMap.propTypes = {};

export default SimpleMap;