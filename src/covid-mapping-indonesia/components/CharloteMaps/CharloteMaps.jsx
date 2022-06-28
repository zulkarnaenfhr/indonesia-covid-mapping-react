import React, { Component } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { center } from "./CharloteMapsData";
import Polygondata from "./PolygonData";
import styles from "./CharloteMaps.module.css";

class Charlotemaps extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataWarna: [],
            persenRendah: 0,
            persenSedang: 0,
            persenTinggi: 0,
            angka: 3,
        };
        this.handleMouseIn = this.handleMouseIn.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }
    async componentDidMount() {
        let jumlahRendah = 0;
        let jumlahSedang = 0;
        let jumlahTinggi = 0;
        await this.props.dataWarna.map((data) => {
            if (data.warna === "#DED716") {
                jumlahRendah += 1;
            } else if (data.warna === "#FFA500") {
                jumlahSedang += 1;
            } else {
                jumlahTinggi += 1;
            }
        });
        this.setState({
            persenRendah: (jumlahRendah / 34) * 100,
            persenSedang: (jumlahSedang / 34) * 100,
            persenTinggi: (jumlahTinggi / 34) * 100,
        });
    }

    handleMouseIn = (provinsi) => {
        this.props.onMouseIn(provinsi);
    };

    handleMouseOut = (provinsi) => {
        this.props.onMouseOut(provinsi);
    };

    render() {
        return (
            <div id={styles["charloteMapsContainer"]}>
                <MapContainer
                    center={center}
                    style={{
                        width: "765px",
                        height: "490px",
                    }}
                    zoom={5}
                >
                    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    <Polygondata dataWarna={this.props.dataWarna} onMouseIn={(provinsi) => this.handleMouseIn(provinsi)} onMouseOut={(provinsi) => this.handleMouseOut(provinsi)} />
                </MapContainer>

                <div className={styles["mapsPenjelasan"]}>
                    <div className={styles["penjelasanContainer"]}>
                        <div className={`${styles["floatLeft"]} ${styles["boxPenjelasan"]} ${styles["penjelasanTinggi"]}`}></div>
                        <p className={`${styles["floatLeft"]} ${styles["descPenjelasan"]} ${styles["descPenjelasan-tinggi"]}`}>High Risk Area ({this.state.persenTinggi.toFixed(2)}%) </p>
                    </div>
                    <div className={styles["penjelasanContainer"]}>
                        <div className={`${styles["floatLeft"]} ${styles["boxPenjelasan"]} ${styles["penjelasanSedang"]}`}></div>
                        <p className={`${styles["floatLeft"]} ${styles["descPenjelasan"]} ${styles["descPenjelasan-sedang"]}`}>Medium Risk Area ({this.state.persenSedang.toFixed(2)}%) </p>
                    </div>
                    <div className={styles["penjelasanContainer"]}>
                        <div className={`${styles["floatLeft"]} ${styles["boxPenjelasan"]} ${styles["penjelasanRendah"]}`}></div>
                        <p className={`${styles["floatLeft"]} ${styles["descPenjelasan"]} ${styles["descPenjelasan-rendah"]}`}>Low Risk Area ({this.state.persenRendah.toFixed(2)}%) </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Charlotemaps;
