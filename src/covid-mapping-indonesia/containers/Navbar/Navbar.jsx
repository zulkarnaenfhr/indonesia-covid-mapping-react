import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
    const handleOnChange = (event) => {
        props.provChange(event);
    };

    return (
        <div id={styles["Navbar"]}>
            <Container fluid>
                <Row>
                    <Col md={5}>
                        <h1 className={styles["Navbar-Branding"]}>
                            <span>Covid-19 ‎</span> Indonesia Live Mapping
                        </h1>
                    </Col>
                    <Col md={7} className={styles["Navbar-Column-Right"]}>
                        <Row className={styles["Navbar-Column-Right-Container"]}>
                            <Col className={styles["Navbar-Column-Right-Container-Column"]}>
                                <div className={styles["Navbar-Form-Box"]}>
                                    <h1 className={styles["Navbar-Form-Box-Title"]}>Update Date</h1>
                                    <h2 className={styles["Navbar-Form-Box-Desc"]}>{props.statusLoad ? props.tanggalUpdate : <Spinner animation="grow" size="sm" />}</h2>
                                </div>
                            </Col>
                            <Col className={styles["Navbar-Column-Right-Container-Column"]}>
                                <div className={styles["Navbar-Form-Box"]}>
                                    {props.statusLoad ? (
                                        <form action="">
                                            <h1 className={styles["Navbar-Form-Box-Title"]}>Province</h1>
                                            <select onChange={handleOnChange} className={styles["selectOption"]}>
                                                <option value="">Select Province</option>
                                                {props.province.map((prov) => {
                                                    return (
                                                        <option key={prov} value={prov}>
                                                            {prov}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </form>
                                    ) : (
                                        <>
                                            <h1 className={styles["Navbar-Form-Box-Title"]}>Province</h1>
                                            <Spinner animation="grow" size="sm" />
                                        </>
                                    )}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Navbar;
