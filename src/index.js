import React from 'react';
import ReactDOM from 'react-dom/client';
import CommentDetail  from './components/CommentDetail';

const App = () => {    
    return (
        <>
            <div className="ui container comments">
                <CommentDetail />
                <CommentDetail />
            </div>
        </>
    );
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);