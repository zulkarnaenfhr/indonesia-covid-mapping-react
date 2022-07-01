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
    }
    async componentDidMount() {
        let jumlahRendah = 0;
        let jumlahSedang = 0;
        let jumlahTinggi = 0;
        await this.props.dataWarna.map((data) => {
            if (data.warna === "#39f245") {
                jumlahRendah += 1;
            } else if (data.warna === "#fabb48") {
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

    render() {
        return (
            <div id={styles["charloteMapsContainer"]}>
                <div
                    style={{
                        width: "100%",
                        position: "relative",
                    }}
                >
                    <MapContainer center={center} zoom={5}>
                        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                        <Polygondata dataWarna={this.props.dataWarna} />
                    </MapContainer>
                </div>

                <Row className={styles["mapsPenjelasan"]}>
                    <Col className={styles["columnPenjelasan"]}>
                        <div className={styles["boxPenjelasan-High"]}></div>
                        <p className={styles["descPenjelasan-High"]}>
                            High Risk Area
                            <span
                                style={{
                                    paddingLeft: "5px",
                                    color: "#ff0000",
                                }}
                            >
                                {this.state.persenTinggi.toFixed(2)}%
                            </span>
                        </p>
                    </Col>
                    <Col className={styles["columnPenjelasan"]}>
                        <div className={styles["boxPenjelasan-Medium"]}></div>
                        <p className={styles["descPenjelasan-Medium"]}>
                            Medium Risk Area
                            <span
                                style={{
                                    paddingLeft: "5px",
                                    color: "#fabb48",
                                }}
                            >
                                {this.state.persenSedang.toFixed(2)}%
                            </span>
                        </p>
                    </Col>
                    <Col className={styles["columnPenjelasan"]}>
                        <div className={styles["boxPenjelasan-Low"]}></div>
                        <p className={styles["descPenjelasan-Low"]}>
                            Low Risk Area
                            <span
                                style={{
                                    paddingLeft: "5px",
                                    color: "#39f245",
                                }}
                            >
                                {this.state.persenRendah.toFixed(2)}%
                            </span>
                        </p>
                        {/* <button onClick={() => console.log(this.props.dataWarna)}>asdas</button> */}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Charlotemaps;
