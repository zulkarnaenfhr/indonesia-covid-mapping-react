import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import CardChartPenambahanKasus from "../../components/CardCharts/CardChartPenambahanKasus/CardChartPenambahanKasus";
import CardChartPenambahanMeninggal from "../../components/CardCharts/CardChartPenambahanMeninggal/CardChartPenambahanMeninggal";
import CardChartPenambahanSembuh from "../../components/CardCharts/CardChartPenambahanSembuh/CardChartPenambahanSembuh";
import CardChartTotalKasus from "../../components/CardCharts/CardChartTotalKasus/CardChartTotalKasus";
import styles from "./Section2.module.css";

export default class Section2 extends Component {
    render() {
        return (
            <Row>
                <Col className={styles["Section2-Column-Container"]} lg={3}>
                    {this.props.statusLoad ? (
                        <>
                            <CardChartTotalKasus data={this.props.data} />
                            <CardChartPenambahanKasus data={this.props.data} />
                            <CardChartPenambahanMeninggal data={this.props.data} />
                            <CardChartPenambahanSembuh data={this.props.data} />
                        </>
                    ) : (
                        <h1>masuk</h1>
                    )}
                </Col>
                <Col className={styles["Section2-Column-Container"]} lg={6}>
                    <h1>masuk</h1>
                </Col>
                <Col className={styles["Section2-Column-Container"]} lg={3}>
                    <h1>masuk</h1>
                </Col>
            </Row>
        );
    }
}
