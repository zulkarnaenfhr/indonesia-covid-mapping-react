import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./Section1.module.css";
import CardData from "../../components/CardData/CardData";
import CardVaksin from "../../components/CardVaksin/CardVaksin";

export default function Section1(props) {
    return (
        <Row>
            <Col className={styles["Section1-Column"]}>
                <CardData statusLoad={props.statusLoad} totalCased={props.totalCasedTotalCased} updatedCased={props.updatedCasedTotalCased} warna={"rgb(243, 72, 72)"} title={"Total Cased"} />
            </Col>
            <Col className={styles["Section1-Column"]}>
                <CardData statusLoad={props.statusLoad} totalCased={props.totalCasedActiveCased} updatedCased={props.updatedCasedActiveCased} warna={"orange"} title={"Total Active Cased"} />
            </Col>
            <Col className={styles["Section1-Column"]}>
                <CardData statusLoad={props.statusLoad} totalCased={props.totalCasedRecoveryCased} updatedCased={props.updatedCasedRecoveryCased} warna={"rgb(30, 236, 30)"} title={"Fully Recovered"} />
            </Col>
            <Col className={styles["Section1-Column"]}>
                <CardData statusLoad={props.statusLoad} warna={"rgb(192, 190, 190)"} totalCased={props.totalCasedDeathCased} updatedCased={props.updatedCasedDeathCased} title={"Death Cased"} />
            </Col>
            <Col className={styles["Section1-Column"]}>
                <CardVaksin statusLoad={props.statusLoad} VaccinationTotal1={props.VaccinationTotal1} VaccinationTotal2={props.VaccinationTotal2} />
            </Col>
        </Row>
    );
}
