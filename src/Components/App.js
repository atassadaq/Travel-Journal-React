
import React from "react";
import Header from "./Header";
import Card from "./Card";
import data from "../data";

const cards = data.map(item => {
    return (
        <Card
            item={item} />
    )
})
export default function App() {
    return (
        <>
            <Header />
            <div className="card--container">
                {cards}
            </div>


        </>
    )
}
