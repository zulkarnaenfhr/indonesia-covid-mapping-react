import React, { Component } from "react";
import styles from "./CardBerita.module.css";

class Cardberita extends Component {
    render() {
        return (
            <div id={styles["cardBerita"]}>
                <div className={styles["cardBerita-judul-container"]}>
                    <p className={styles["cardBerita-judul"]}>Indonesia Covid-19 News</p>
                </div>
                <div className={styles["cardBerita-content"]}>
                    {this.props.dataBerita.map((data, index) => {
                        if (index < 10) {
                            const date = new Date(data.publishedAt);
                            const namaBulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"];
                            const tahun = date.getFullYear();
                            const bulan = namaBulan[date.getMonth()];
                            const tanggal = date.getDate();
                            const tanggalUpload = `${tanggal} ${bulan} ${tahun}`;
                            return (
                                <div className={styles["beritaContainer"]} key={data.url}>
                                    <p className={styles["beritaJudul"]}>{data.title}</p>
                                    <p className={styles["beritaDesc"]}>{data.description}</p>
                                    <p className={styles["beritaLinkTanggal"]}>
                                        <a target={"blank"} className={styles["beritaLink"]} href={data.url}>
                                            Klik Disini
                                        </a>
                                        ,<span className={styles["beritaTanggal"]}>{tanggalUpload}</span>
                                    </p>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        );
    }
}

export default Cardberita;
