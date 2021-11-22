import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import SousNavbar from "../../components/SousNavbar/SousNavbar";
import "./Styles.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CDG from "./CGD";

const ConditionGénérale = () => {
  return (
    <>
      <Navbar />
      <SousNavbar/>
      <div className="Information-Page-Container" >
        <h1>Questions Clients et Conditions de Ventes</h1>
        {CDG.map((Faq) => (
          <>
            <Accordion style={{width:"100%" }}>
              <AccordionSummary
                style={{width:"100%"}}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                
              >
                <Typography>{Faq.Q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {Faq.RA}
                </Typography>
                <Typography>
                    {Faq.RF}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ConditionGénérale;
