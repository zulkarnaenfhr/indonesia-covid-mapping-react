import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import CardChartTotalKasus from "../../components/CardCharts/CardChartTotalKasus/CardChartTotalKasus";
import styles from "./Section2.module.css";

export default class Section2 extends Component {
    render() {
        return (
            <Row>
                <Col>
                    <CardChartTotalKasus />
                </Col>
                <Col>
                    <h1>masuk</h1>
                </Col>
                <Col>
                    <h1>masuk</h1>
                </Col>
            </Row>
        );
    }
}
