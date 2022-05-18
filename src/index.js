import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { lat: null, errorMessage: '' };

        this.getLocation();
    }

    getLocation() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude
                });
            },
            (err) => {
                this.setState({
                    errorMessage: err.message
                });
            }
        );
    }

    render() {
        if (!this.state.lat && this.state.errorMessage)
            return <div>Error: { this.state.errorMessage }</div>;
        if (this.state.lat && !this.state.errorMessage)
            return <div>Latitude: { this.state.lat }</div>;
        return <div>Loading...</div>;
    }
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);