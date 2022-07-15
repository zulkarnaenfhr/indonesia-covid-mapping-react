import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css";

class Footer extends Component {
    render() {
        return (
            <div id={styles["footer"]}>
                <div className={styles["footer-content-container"]}>
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
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <p className={styles["footer-desc"]}>
                            Using API From
                            <a className={styles["footer-link"]} href="https://covid19.go.id/dokumentasi-api">
                                Covid-19.go.id
                            </a>
                        </p>
                        <p
                            className={styles["footer-desc"]}
                            style={{
                                marginLeft: "20px",
                            }}
                        >
                            Cek Ketersediaan Bed Rumah Sakit
                            <a className={styles["footer-link"]} href="https://cek-bed-rs-indonesia.herokuapp.com/">
                                cek-bed-rs-indonesia.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
