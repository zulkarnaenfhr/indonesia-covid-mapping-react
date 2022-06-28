import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
    const handleOnChange = (event) => {
        props.provChange(event);
    };

    return (
        <div id={styles["Navbar"]}>
            <Container>
                <Row>
                    <Col lg={5}>
                        <h1 className={styles["Navbar-Branding"]}>
                            <span>Covid-19 ‎</span> Indonesia Live Mapping
                        </h1>
                    </Col>
                    <Col lg={7} className={styles["Navbar-Column-Right"]}>
                        <div className={styles["Navbar-Form-Box"]}>
                            <h1 className={styles["Navbar-Form-Box-Title"]}>Update Date</h1>
                            <h2 className={styles["Navbar-Form-Box-Desc"]}>{props.statusLoad ? props.tanggalUpdate : <Spinner animation="grow" size="sm" />}</h2>
                        </div>
                        <div className={styles["Navbar-Form-Box"]}>
                            <form action="">
                                <h1 className={styles["Navbar-Form-Box-Title"]}>Province</h1>
                                {props.statusLoad ? (
                                    <>
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
                                    </>
                                ) : (
                                    <Spinner animation="grow" size="sm" />
                                )}
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Navbar;