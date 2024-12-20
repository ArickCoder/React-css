import React from "react";
import ReactDOM from "react-dom";

class MyStyling extends React.Components {
    render() {
        const myHeaderStyle = {
            color: "green",
            backgroundColor: "yellow",
            fontFamily: "Arial",
            padding: "5px"
        };

        const myStyle = {
            color: "red",
            backgroundColor: "skyblue",
            fontFamily: "poppins",
            padding: "15px"
        };

        return (
            <div>
                <h1 style={myHeaderStyle}>Hello!</h1>
                <p style={myStyle}>How Are You?</p>
            </div>
        )
    }
}

ReactDOM.render(<MyStyling />, document.getElementById('root'));