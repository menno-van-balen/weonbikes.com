import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Trans, Link, useI18next } from "gatsby-plugin-react-i18next";

import {
  bookContentWrapper,
  bookImage,
  bookContent,
  bookReview,
  quotes,
  bookButtons,
  bookButton2,
} from "./book.module.css";

import BuyButton from "../utils/buyButton";

const getLocalizedRoute = require("../i18n/getLocalizedRoute");

const Book = () => {
  const { language } = useI18next();
  const lng = language;

  return (
    <div className={bookContentWrapper}>
      <div className={bookContent}>
        <div className={bookReview}>
          <div className={quotes} style={{ marginBottom: "-70px" }}>
            “
          </div>
          <p style={{ lineHeight: "25px" }}>
            <Trans>
              Da haben Sie ja eine spannende Reise erlebt, die von Ihnen
              eindrucksvoll beschriebenen Bilder machen Lust zum Reisen – vielen
              Dank für diese angenehme Abwechslung!
            </Trans>
          </p>
          <div className={quotes} style={{ marginTop: "-30px" }}>
            ”
          </div>
        </div>
        <div className={bookButtons}>
          <Link className={bookButton2} to={getLocalizedRoute("/buch/", lng)}>
            <Trans>Buch lesen</Trans>
          </Link>
          <BuyButton />
        </div>
      </div>
      <div className={bookImage}>
        {language === "de" && (
          <StaticImage
            alt="book-cover"
            src="../images/cover-de.jpg"
            placeholder="blurred"
            loading="lazy"
            width={600}
          />
        )}
        {language === "en" && (
          <StaticImage
            alt="book-cover"
            src="../images/cover-en.jpg"
            placeholder="blurred"
            loading="lazy"
            width={600}
          />
        )}
      </div>
    </div>
  );
};

export default Book;
