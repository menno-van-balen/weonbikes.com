import * as React from "react";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";

import {
  buyBookWrapper,
  bookLinks,
  buyBookLinks,
  book,
  price,
} from "./buyBook.module.css";

const BuyBook = () => {
  const { language } = useI18next();

  const ebookLink =
    language === "de"
      ? "https://www.amazon.com/Von-Moskau-zum-Nordkap-Fahrrad-ebook/dp/B0B9HWJ76Q?ref_=ast_author_dp"
      : "https://www.amazon.com/Moscow-North-Cape-bicycle-journal-ebook/dp/B09SQBSGNC?ref_=ast_author_dp";
  const paperbackLink =
    language === "de"
      ? "https://www.bod.de/buchshop/von-moskau-zum-nordkap-auf-dem-fahrrad-uta-schulz-9783755791560"
      : "https://www.bod.de/buchshop/from-moscow-to-the-north-cape-by-bycicle-uta-schulz-9783755793199";
  const hardcoverLink =
    "https://www.bod.de/buchshop/von-moskau-zum-nordkap-auf-dem-fahrrad-uta-schulz-9783755791539";

  return (
    <div className={buyBookWrapper}>
      <div className={bookLinks}>
        <h2>
          <Trans>Buch kaufen</Trans>
        </h2>
        <p>
          <Trans>
            Den bebilderten Reisebericht Von Moskau zum Nordkap bekommst du
            überall im Handel und in allen gängigen Online-Shops. Für uns ist es
            allerdings am besten, wenn du das Buch über den BoD-Link unten
            bestellst.
          </Trans>
        </p>
        <div className={buyBookLinks} id="buybook">
          <a href={ebookLink} target="_blank" rel="noreferrer">
            <p className={price}>€7,99</p>
            <p className={book}>
              <Trans>E-Book</Trans>
            </p>
          </a>
          <a href={paperbackLink} target="_blank" rel="noreferrer">
            <p className={price}>€12,99</p>
            <p className={book}>
              <Trans>Paperback</Trans>
            </p>
          </a>
          {language === "de" && (
            <a href={hardcoverLink} target="_blank" rel="noreferrer">
              <p className={price}>€21,99</p>
              <p className={book}>
                <Trans>Hardcover - Fotoqualität</Trans>
              </p>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuyBook;
