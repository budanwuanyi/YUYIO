import React from 'react';
import MapComponent from '../component/LoginButton';
import LoginComponent from '../component/GoogleMapComponent';

class PageComponent extends React.Component {
    render() {
        return (
            <div>
                <LoginComponent />
                <MapComponent />
            </div>
        );
    }
}

export default PageComponent;
