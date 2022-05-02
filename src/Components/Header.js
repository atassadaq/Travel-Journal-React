import React from "react"

export default function Header(props) {
    return(
        <div className="header" id={props.darkMode ? "dark": ""}>
            <h2 className="title">🌎 Travel Journal</h2>
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div  className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </div>
    )
}