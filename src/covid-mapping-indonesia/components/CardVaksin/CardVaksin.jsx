import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "./CardVaksin.module.css";

const CardVaksin = (props) => {
    return (
        <div id={styles["CardVaksin"]}>
            <div className={styles["CardVaksin-Top"]}>
                <p className={styles["CardVaksin-Title"]}>Total National Vaccination 1</p>
                {props.statusLoad ? <p className={styles["CardVaksin-Value"]}>{props.VaccinationTotal1.toLocaleString()}</p> : <Spinner animation="grow" size="sm" />}
            </div>
            <div className={styles["CardVaksin-Bottom"]}>
                <p className={styles["CardVaksin-Title"]}>Total National Vaccination 2</p>
                {props.statusLoad ? <p className={styles["CardVaksin-Value"]}>{props.VaccinationTotal2.toLocaleString()}</p> : <Spinner animation="grow" size="sm" />}
            </div>
        </div>
    );
};

export default CardVaksin;
