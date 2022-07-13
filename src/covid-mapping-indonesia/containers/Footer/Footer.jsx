import React, { Component } from "react";
import styles from "./Footer.module.css";

class Footer extends Component {
    render() {
        return (
            <div id={styles["footer"]}>
                <div>
                    <p className={styles["footer-desc"]}>
                        Design and Developed by{" "}
                        <span
                            style={{
                                color: "#19F9D8",
                            }}
                        >
                            SpaceCapt-Tech @covid-2022
                        </span>{" "}
                    </p>
                    <p className={styles["footer-desc"]}>
                        Using API From
                        <a className={styles["footer-link"]} href="https://covid19.go.id/dokumentasi-api">
                            Covid-19.go.id
                        </a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Footer;
