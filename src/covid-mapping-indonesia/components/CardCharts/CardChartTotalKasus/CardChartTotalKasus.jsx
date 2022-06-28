import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import "./CardChartTotalKasus.css";

am4core.useTheme(am4themes_animated);

class CardChartTotalKasus extends Component {
    componentDidMount() {
        let chart = am4core.create("chartdiv", am4charts.XYChart); // declare dulu

        chart.paddingRight = 20;

        let data = [];

        // buat ambil data
        for (let i = 0; i < this.props.data.length; i++) {
            data.push({
                date: this.props.data[i].key_as_string,
                value: this.props.data[i].jumlah_positif_kum.value,
            });
        }
        // end of buat ambil data

        chart.data = data; // masukin datanya
        chart.stroke = am4core.color("white"); // warna border sama tulisan dari chart container

        let dateAxis = chart.xAxes.push(new am4charts.DateAxis()); // deploy x nya
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.tooltip.stroke = am4core.color("white"); // tulisan yang ada di tooltip
        dateAxis.dateFormats.setKey("day", "dd MMM yy"); // format datenya

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis()); // ini bagian valuenya atau y axes
        valueAxis.tooltip.disabled = true; // ini buat pengukuran, kalau dia disable berarti ga keluar(on hover)

        let series = chart.series.push(new am4charts.LineSeries()); // masukin chartingnnya
        series.dataFields.dateX = "date"; // deploy x as a
        series.dataFields.valueY = "value"; // deploy y as a value
        series.stroke = am4core.color("green"); // warna graphic
        series.fill = am4core.color("green"); // fill color
        series.fillOpacity = 0.2; // fill opacity

        series.tooltipText = "+{valueY.value}";
        series.tooltip.stroke = am4core.color("white");
        series.tooltip.getFillFromObject = false;
        series.tooltip.background.fill = am4core.color("black");
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.lineX.stroke = am4core.color("white");
        chart.cursor.lineY.stroke = am4core.color("white");

        this.chart = chart;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <div id="cardChartTotalKasus">
                <p className="cardChartTotalKasus-judul">National Cumulative Case Total Chart</p>
                <div className="chartTotalKasus-container" id="chartdiv" style={{ width: "100%", height: "220px" }}></div>
            </div>
        );
    }
}

export default CardChartTotalKasus;
