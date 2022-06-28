import React, { Component } from "react";
import styles from "./WilayahKasusTerbanyak.module.css";

class Wilayahkasusterbanyak extends Component {
    render() {
        return (
            <div id={styles["wilayahKasusTerbanyak"]}>
                <div className={styles["wilayahKasusTerbanyak-content-judul-container"]}>
                    <p className={styles["wilayahKasusTerbanyak-content-judul"]}>10 Most Provinces Cases </p>
                </div>
                <div className={styles["wilayahKasusTerbanyak-content"]}>
                    <div className={styles["wilayahKasusTerbanyak-content-provinsi-container"]}>
                        {this.props.dataProvinsi.map((data, index) => {
                            if (index < 1) {
                                return (
                                    <p className={styles["daftarProvinsi"]} key={data.key}>
                                        {" "}
                                        {index + 1}. {data.key} <span className={styles["topTotalKasus"]}>({data.jumlah_kasus.toLocaleString()})</span>{" "}
                                    </p>
                                );
                            }
                            if (index < 10) {
                                return (
                                    <p className={`${styles["daftarProvinsi"]} ${styles["daftarProvinsi2"]}`} key={data.key}>
                                        {" "}
                                        {index + 1}. {data.key} <span className={styles["topTotalKasus"]}>({data.jumlah_kasus.toLocaleString()})</span>{" "}
                                    </p>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Wilayahkasusterbanyak;
