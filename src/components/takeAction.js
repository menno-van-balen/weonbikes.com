import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

import {
  takeActionWrapper,
  takeActionContentWrapper,
} from "./takeAction.module.css";

const TakeAction = () => {
  return (
    <div className={takeActionWrapper}>
      <div className={takeActionContentWrapper}>
        <h2>
          <Trans>Sei dabei!</Trans>
        </h2>
        <p>
          <Trans>
            Wenn dir unser Projekt gefällt, abonniere unseren Newsletter, um auf
            dem Laufenden zu bleiben.
          </Trans>
        </p>
        {/* TODO: immer her damit wordt contact form naar clickup*/}
        <p>
          <Trans>
            Du kannst uns mit Vorschlägen zur Route, zu Fahrradmodellen,
            Equipment und was du sonst noch wichtig findest auf Facebook,
            Instagram und Youtube unterstützen. Außerdem haben wir interessante
            Anregungen in unserem Mitmach-Programm. Wenn du noch eine Idee hast
            - immer her damit!
          </Trans>
        </p>
      </div>
    </div>
  );
};

export default TakeAction;
