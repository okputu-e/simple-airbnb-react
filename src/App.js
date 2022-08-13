import React from "react";
import "./style.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./data";

function App() {
  const CardData = Data.map((data) => (
    <Card
      key={data.id}
      img={data.coverImg}
      rating={data.stats.rating}
      reviewCount={data.stats.reviewCount}
      location={data.location}
      title={data.title}
      price={data.price}
      openspot={data.openSpots}
      // or {...data}
      //or data = {data}
    />
  ));
  return (
    <div className="App">
      <Nav />
      <Hero />
      <section className="cards">{CardData}</section>
    </div>
  );
}

export default App;
