import React from "react";
import "./SousNavbar.css";
import { Link } from "react-router-dom";
import Commerce from '@chec/commerce.js';


const SousNavbar = () => {

const commerce = new Commerce('pk_36001f7af3b1b51abce851bf8b1542f4c28480fe48b39');

commerce.categories.list().then((category) => console.log(category.name));
  return (
    <>
      <div className="SousNavbar-Container">
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="">Lingerie</Link>
              <ul>
                <li>
                  <Link to="">Ensemble 2 Ps</Link>
                </li>
                <li>
                  {" "}
                  <Link to="">Nuisettes</Link>
                </li>
                <li>
                  {" "}
                  <Link to="">Bodys</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="">Soutiens-gorge</Link>
                </li>
                <li>
                  {" "}
                  <Link to="">Culottes</Link>
                </li>
                <li>
                  {" "}
                  <Link to="">Tenues sexy</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="">PYJAMAS</Link>
              <ul>
                  <li>
                      <Link to="">Pyjamas d'été</Link>
                  </li>
                  <li>
                      <Link to=""> Pyjamas en satin </Link>
                  </li>
                  <li>
                      <Link to=""> Ensemble satin </Link>
                  </li>
                  <li>
                      <Link to=""> Combi-short </Link>
                  </li>
                  <li>
                      <Link to=""> Pyjamas d'hiver </Link>
                  </li>
                  <li>
                      <Link to=""> Robes </Link>
                  </li>
              </ul>
            </li>
            <li>
                <Link to=""> DÉSHABILLÉS </Link>
                <ul>
                    <li>
                        <Link to=""> Déshabillés</Link>
                    </li>
                    <li>
                        <Link to=""> Peignoirs </Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to=""> ACCESSOIRES</Link>
                <ul>
                    <li>
                        <Link to=""> Bas collant </Link>
                    </li>
                    <li>
                        <Link to=""> Chaussette </Link>
                    </li>
                    <li>
                        <Link to=""> Gaines </Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to=""> SPORTS</Link>
                <ul>
                    <li>
                        <Link to=""> Pantalon </Link>
                    </li>
                    <li>
                        <Link to=""> Fuseaux </Link>
                    </li>
                    <li>
                        <Link to=""> Bras </Link>
                    </li>
                    <li>
                        <Link to=""> Survetement </Link>
                    </li>
                    <li>
                        <Link to=""> Legging </Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to=""> INFORMATIONS</Link>
                <ul>
                    <li>
                        <Link to="/methode-de-livraison"> Méthode de livraison </Link>
                    </li>
                    <li>
                        <Link to="/methode-de-paiement"> Méthode de paiement </Link>
                    </li>
                    <li>
                        <Link to="/questions-clients-et-conditions-de-ventes"> Condition Générales</Link>
                    </li>
                    <li>
                        <Link to=""> Guide des tailles </Link>
                    </li>
                </ul>
            </li>
            </ul>  
        </nav>
      </div>
    </>
  );
};

export default SousNavbar;
