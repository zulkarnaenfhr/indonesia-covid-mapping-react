import React, { Component } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { center } from "./CharloteMapsData";
import Polygondata from "./PolygonData";
import styles from "./CharloteMaps.module.css";
import { Row, Col } from "react-bootstrap";

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
                        width: "818px",
                        height: "490px",
                    }}
                    zoom={5}
                >
                    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    <Polygondata dataWarna={this.props.dataWarna} onMouseIn={(provinsi) => this.handleMouseIn(provinsi)} onMouseOut={(provinsi) => this.handleMouseOut(provinsi)} />
                </MapContainer>

                <Row className={styles["mapsPenjelasan"]}>
                    <Col className={styles["columnPenjelasan"]}>
                        <div className={styles["boxPenjelasan-High"]}></div>
                        <p className={styles["descPenjelasan-High"]}>High Risk Area</p>
                    </Col>
                    <Col className={styles["columnPenjelasan"]}>
                        <div className={styles["boxPenjelasan-Medium"]}></div>
                        <p className={styles["descPenjelasan-Medium"]}>Medium Risk Area</p>
                    </Col>
                    <Col className={styles["columnPenjelasan"]}>
                        <div className={styles["boxPenjelasan-Low"]}></div>
                        <p className={styles["descPenjelasan-Low"]}>Low Risk Area</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Charlotemaps;
