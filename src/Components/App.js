
import React from "react";
import Header from "./Header";
import Card from "./Card";
import data from "../data";



export default function App() {
    const [darkMode, setDarkMode] = React.useState(true)
    const cards = data.map(item => {
        return (
            <Card
                item={item}
                darkMode = {darkMode} />
        )
    })
    function toggleDarkMode() {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }
    return (
        <>
            <Header
            darkMode = {darkMode}
            toggleDarkMode= {toggleDarkMode} />
            <div className="card--container" id={darkMode ? "dark": ""}>
                {cards}
            </div>


        </>
    )
}
