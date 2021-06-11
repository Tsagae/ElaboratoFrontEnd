import * as React from "react";
import * as styles from "./games.module.css";
import Layout from "../components/Layout";
import GamesIndex from "../components/GamesIndex";
import { StaticImage } from "gatsby-plugin-image";

export default class Games extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchStr: null,
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleSearchChange(event) {
        this.setState({ searchStr: event.target.value });
    }

    render() {
        return (
            <div>
                <Layout>
                    <div>
                        <div className={styles.searchBarContainer}>
                            <input type="search" className={styles.bar} placeholder="Ricerca" onChange={this.handleSearchChange} />
                            <StaticImage
                                src="../images/searchIcon.png"
                                placeholder="blurred"
                                layout="fixed"
                                width={30}
                                height={30}
                            />
                        </div>
                        <div className={styles.gamesContainer}>
                            <GamesIndex offset={0} limit={200} searchStr={this.state.searchStr} />
                        </div>
                    </div>
                </Layout>
            </div>
        );
    }
};