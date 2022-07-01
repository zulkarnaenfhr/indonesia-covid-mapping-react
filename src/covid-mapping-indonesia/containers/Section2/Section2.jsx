import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Cardberita from "../../components/CardBerita/CardBerita";
import CardChartPenambahanKasus from "../../components/CardCharts/CardChartPenambahanKasus/CardChartPenambahanKasus";
import CardChartPenambahanMeninggal from "../../components/CardCharts/CardChartPenambahanMeninggal/CardChartPenambahanMeninggal";
import CardChartPenambahanSembuh from "../../components/CardCharts/CardChartPenambahanSembuh/CardChartPenambahanSembuh";
import CardChartTotalKasus from "../../components/CardCharts/CardChartTotalKasus/CardChartTotalKasus";
import Charlotemaps from "../../components/CharloteMaps/CharloteMaps";
import Wilayahkasusterbanyak from "../../components/wilayahKasusTerbanyak/WilayahKasusTerbanyak";
import styles from "./Section2.module.css";
import { Spinner } from "react-bootstrap";

export default class Section2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: "upUpdate",
        };
    }

    render() {
        return (
            <Row>
                <Col className={styles["Section2-Column-Container"]} lg={3}>
                    {this.props.statusLoad ? (
                        <>
                            <CardChartTotalKasus data={this.props.data} />
                            {this.state.status === "upUpdate" ? (
                                <CardChartPenambahanKasus data={this.props.data} />
                            ) : this.state.status === "upRecovered" ? (
                                <CardChartPenambahanSembuh data={this.props.data} />
                            ) : (
                                <CardChartPenambahanMeninggal data={this.props.data} />
                            )}
                        </>
                    ) : (
                        <>
                            <div id={styles["CardChartLoading"]}>
                                <Spinner animation="grow" size="xl" />
                            </div>
                            <div id={styles["CardChartLoading2"]}>
                                <Spinner animation="grow" size="xl" />
                            </div>
                        </>
                    )}
                    <div className={styles["ButtonContainer"]}>
                        <button
                            style={this.state.status === "upUpdate" ? { color: "rgb(243, 72, 72)" } : { color: "white" }}
                            onClick={() =>
                                this.setState({
                                    status: "upUpdate",
                                })
                            }
                            className={styles["ButtonRow2Section1"]}
                        >
                            Increased Cased
                        </button>
                        <button
                            style={this.state.status === "upRecovered" ? { color: "rgb(30, 236, 30)" } : { color: "white" }}
                            onClick={() =>
                                this.setState({
                                    status: "upRecovered",
                                })
                            }
                            className={styles["ButtonRow2Section1"]}
                        >
                            Recovered
                        </button>
                        <button
                            style={this.state.status === "upDeath" ? { color: "rgb(192, 190, 190)" } : { color: "white" }}
                            onClick={() =>
                                this.setState({
                                    status: "upDeath",
                                })
                            }
                            className={styles["ButtonRow2Section1"]}
                        >
                            Death
                        </button>
                    </div>
                </Col>
                <Col className={styles["Section2-Column-Container"]} lg={7}>
                    {this.props.statusLoad ? (
                        <Charlotemaps dataWarna={this.props.warnaProvinsi} />
                    ) : (
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "white",
                            }}
                        >
                            <Spinner animation="grow" size="xl" />
                        </div>
                    )}
                </Col>
                <Col className={styles["Section2-Column-Container"]} lg={2}>
                    <Wilayahkasusterbanyak dataProvinsi={this.props.provinceData} />
                    <Cardberita dataBerita={this.props.beritaCovid} />
                </Col>
            </Row>
        );
    }
}
