import React from "react";

function Adress() {
  var myAdress = {
    Rue: "25,Rue Pygmalyon",
    Cartier: "Jardins de Carthage",
    City: "Tunis",
  };
  return (
    <div className="Address">
      <h3>{myAdress.Rue}</h3>
      <h3>{myAdress.Cartier}</h3>
      <h3>{myAdress.City}</h3>
    </div>
  );
}

export default Adress;
