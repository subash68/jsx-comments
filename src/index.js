import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';
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

    renderContent() {
        if (!this.state.lat && this.state.errorMessage)
            return <div>Error: { this.state.errorMessage }</div>;
        if (this.state.lat && !this.state.errorMessage)
            return <SeasonDisplay lat={ this.state.lat } />;
        return <Spinner message='Please allow location.' />;
    }

    render() {
        return (
            <>
                { this.renderContent() }
            </>
        );
    }
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);