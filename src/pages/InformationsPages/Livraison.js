import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import SousNavbar from "../../components/SousNavbar/SousNavbar";
import LivraisonData from "./LivraisonData";
import "./Styles.css";

const Livraison = () => {
  return (
    <>
      <Navbar />
      <SousNavbar />
      <div className="Information-Page-Container">
        <h1>Méthode de livraison</h1>
        <table className="Table-Informations">
          <th>N°</th>
          <th>Wilaya</th>
          <th>tarifs a domicile</th>
          <th>Tarifs stop desk</th>
          {LivraisonData.map((info) => (
            <>
              <tr>
                <td> {info.N} </td>
                <td> {info.wilaya} </td>
                <td> {info.domicile} </td>
                <td> {info.stopdesk} </td>
              </tr>
            </>
          ))}
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Livraison;
