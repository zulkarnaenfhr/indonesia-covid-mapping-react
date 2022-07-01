import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "./CardData.module.css";

export default function CardData(props) {
    return (
        <div id={styles["CardData"]}>
            <div className={styles["CardData-Top"]}>
                <p className={styles["CardData-Top-Title"]}>{props.title}</p>
                {props.statusLoad ? (
                    <h1 style={{ color: props.warna }} className={styles["CardData-Top-Value"]}>
                        {props.totalCased.toLocaleString()}
                    </h1>
                ) : (
                    <div
                        style={{
                            textAlign: "center",
                            color: props.warna,
                        }}
                    >
                        <Spinner animation="grow" size="sm" />
                    </div>
                )}
            </div>
            <div className={styles["CardData-Bottom"]}>
                <p className={styles["CardData-Bottom-Title"]}>Update</p>
                {props.statusLoad ? (
                    <p style={{ color: props.warna }} className={styles["CardData-Bottom-Value"]}>
                        {props.updatedCased.toLocaleString()}
                    </p>
                ) : (
                    <div
                        style={{
                            textAlign: "center",
                            color: props.warna,
                        }}
                    >
                        <Spinner animation="grow" size="sm" />
                    </div>
                )}
            </div>
        </div>
    );
}
