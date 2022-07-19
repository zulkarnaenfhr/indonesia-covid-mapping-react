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
                    <Row
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Col md={4} className={styles["footer-desc"]}>
                            Using API From
                            <a className={styles["footer-link"]} target={"blank"} href="https://covid19.go.id/dokumentasi-api">
                                Covid-19.go.id
                            </a>
                        </Col>
                        <Col md={7}
                            className={styles["footer-desc"]}
                            style={{
                                marginLeft: "20px",
                            }}
                        >
                            Cek Ketersediaan Bed Rumah Sakit
                            <a className={styles["footer-link"]} target={"blank"} href="https://cek-bed-rs-indonesia.herokuapp.com/">
                                cek-bed-rs-indonesia.com
                            </a>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Footer;
