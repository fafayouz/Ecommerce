import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import SousNavbar from "../../components/SousNavbar/SousNavbar";
import './Styles.css';

const Paiment = () => {
  return (
    <>
      <Navbar />
      <SousNavbar />
      <div className="Information-Page-Container">
        <h1>Méthode de paiement</h1>
        <p>
          En atttendant le lancement d'une solution de paiement électronique
          fiable, le client peut payer ses achats en espèce à notre livreur lors
          de la réception de la commande. Le montant total à payer sera
          communiqué au client lors de la confirmation de la commande sera noté
          également sur le colis reçu.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Paiment;
