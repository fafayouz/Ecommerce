import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="Footer-Container">
        <div className="Footer-Box">
          <h3>INFORMATIONS</h3>
          <ul>
            <li>
              <Link to="">Méthode de livraison .</Link>
            </li>
            <li>
              <Link to="">Adresse.</Link>
            </li>
            <li>
              <Link to="">Questions Clients et Conditions de Ventes .</Link>
            </li>
            <li>
              <Link to="">Paiement .</Link>
            </li>
          </ul>
        </div>
        <div className="Footer-Box">
          <h3>MON COMPTE</h3>
          <ul>
            <li>
              <Link to="">Mon profil.</Link>
            </li>
            <li>
              <Link to="">Mes commandes.</Link>
            </li>
            <li>
              <Link to="">Produits favoris .</Link>
            </li>
          </ul>
        </div>
        <div className="Footer-Box--">
          <h3>RESTONS CONNECTÉ.E.S</h3>
          <span>
            Inscrivez-vous aux mises à jour de L'Escale Rose pour recevoir des
            informations sur les nouveaux arrivages, les événements futurs et
            les promotions.
          </span>
          <div className="Footer-Social">
            <input type="email" placeholder="Entrez votre adresse Email" />
            <button>SOUSCRIRE</button>
            <h3>NOUS SUIVRE</h3>
            <div className="Footer-Social-Icons">
              <a href="www.facebook.com">
                <BsFacebook />
              </a>
              <a href="www.instagram.com">
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
