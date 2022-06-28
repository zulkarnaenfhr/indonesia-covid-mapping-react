import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import CardChartPenambahanKasus from "../../components/CardCharts/CardChartPenambahanKasus/CardChartPenambahanKasus";
import CardChartPenambahanMeninggal from "../../components/CardCharts/CardChartPenambahanMeninggal/CardChartPenambahanMeninggal";
import CardChartPenambahanSembuh from "../../components/CardCharts/CardChartPenambahanSembuh/CardChartPenambahanSembuh";
import CardChartTotalKasus from "../../components/CardCharts/CardChartTotalKasus/CardChartTotalKasus";
import styles from "./Section2.module.css";

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
                        <h1>masuk</h1>
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
                <Col className={styles["Section2-Column-Container"]} lg={6}>
                    <h1>masuk</h1>
                    <button onClick={() => console.log(this.state.status)}>asdasda</button>
                </Col>
                <Col className={styles["Section2-Column-Container"]} lg={3}>
                    <h1>masuk</h1>
                </Col>
            </Row>
        );
    }
}
