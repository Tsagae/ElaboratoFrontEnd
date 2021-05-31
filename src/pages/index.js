import * as React from "react";
import "../globalStyle/globalStyle.css";
import Layout from "../components/Layout";
import * as styles from "./index.module.css";
import Arcade from "../components/Arcade";
import { StaticImage } from "gatsby-plugin-image";
import AnnualEsportGrowthChart from "../components/AnnualEsportGrowthChart";

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <div className={styles.mainContainer}>
          <div className={styles.contentRow}>
            <div className={styles.paragraphWrapper}>
              <h4>Cos'è EsportWatcher</h4>
              <p>Esport Watcher è un sito per la visualizzazione e l'analisi dei trend nel mondo dell'Esport e dell'intrattenimento ad esso legato
              </p>
            </div>
            <h1>EW</h1>
          </div>
          <div className={styles.contentRow}>
            <StaticImage
              src="../images/whiteController.png"
              alt="Controller"
              placeholder="blurred"
              width={200}
              height={200} />
            <div className={styles.paragraphWrapper}>
              <h4>Cos'è l'Esport</h4>
              <p>"L'Esport è una forma di competizione che utilizza i videogiochi.
              Le competizioni sono solitamente organizzate tra giocatori professionisti
              individuali o come team"
                </p>
              <p>
                L'Esport non è limitato solamente alla competizione in sé, per capire il fenomeno bisogna anche considerare la componente di intrattenimento che viene generata dagli eventi
                </p>
            </div>
          </div>
          <div className={styles.contentRow}>
            <div className={styles.paragraphWrapper}>
              <h4>I numeri</h4>
              <p>Le proiezioni per la fine di quest'anno indicano un aumento dell'audience che raggiungerà le 474 milioni di persone con ricavi del settore poco oltre il miliardo di dollari.
                 </p>
            </div>
            <StaticImage
              src="../images/whiteChartIcon.png"
              alt="Chart"
              placeholder="blurred"
              width={200}
              height={200} />
          </div>
          <div className={styles.chartWrapper}>
            <AnnualEsportGrowthChart height={400} />
          </div>
        </div>
        <div className={styles.contentRow}>
          <StaticImage
            src="../images/twitchLogo.png"
            alt="Twitch"
            placeholder="blurred"
            width={300}
            height={150} />
          <div className={styles.paragraphWrapper}>
            <h4>Cos'è Twitch</h4>
            <p>Twitch è una piattaforma di streaming di contenuti in diretta concentrata principalmente sullo streaming di videogiochi.
            Opera in maniera simile a Youtube, permettendo a tutti di creare contenuti, ma basandosi interamente sul live streaming.
            Nel 2014 è stata acquistata da Amazon per 970 milioni di dollari e ha oggi un valore stimato di 15 miliardi di dollari.
                </p>
                <p>
                  I dati utilizzati riguardanti gli spettatori sono tutti derivati da Twitch
                </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default IndexPage;
