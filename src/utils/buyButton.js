import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

const BuyButton = (props) => {
  const style = {
    margin: props?.margin || "0",
    display: "block",
    textDecoration: "none",
    padding: props?.padding || "5px 15px",
    alignSelf: "center",
    textAlign: "center",
    backgroundColor: "#ee6556",
    color: props?.color || "white",
    fontWeight: props?.fontWeight || "normal",
    fontSize: props?.fontSize || "1em",
  };

  return (
    <a href="#buybook" style={style}>
      <Trans>Jetzt Buch kaufen</Trans>
    </a>
  );
};

export default BuyButton;
