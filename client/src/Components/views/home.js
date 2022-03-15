import React, { useEffect } from "react";
// import axios from "axios";
import './home.css'



export default function Home() {
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/user/all")
  //     .then((res) => console.log(res))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div >
      <h1 className="text"> Sauvez des produits invendus à prix reduit </h1>
      <p className="text2">Chez AntiGaspi on lutte contre le gaspillage alimentaire. Tous les jours et près de chez vous,
         de nombreux commerçants vous proposent sur notre application des aliments à petit prix.
         Alors, qu'attendez-vous pour essayer?</p>
    </div>
  );
}