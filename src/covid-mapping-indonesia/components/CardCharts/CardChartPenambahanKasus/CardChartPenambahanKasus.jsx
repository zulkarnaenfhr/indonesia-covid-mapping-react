import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import styles from "./CardChartPenambahanKasus.module.css";

am4core.useTheme(am4themes_animated);

class CardChartPenambahanKasus extends Component {
    componentDidMount() {
        let chart2 = am4core.create("chartdiv2", am4charts.XYChart); // declare dulu

        chart2.paddingRight = 20;

        let data2 = [];

        // buat ambil data
        for (let i = 0; i < this.props.data.length; i++) {
            data2.push({
                date: this.props.data[i].key_as_string,
                value: this.props.data[i].jumlah_positif.value,
            });
        }
        // end of buat ambil data

        chart2.data = data2; // masukin datanya
        chart2.stroke = am4core.color("white"); // warna border sama tulisan dari chart container

        let dateAxis = chart2.xAxes.push(new am4charts.DateAxis()); // deploy x nya
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.tooltip.stroke = am4core.color("white"); // tulisan yang ada di tooltip
        dateAxis.dateFormats.setKey("day", "dd MMM yy"); // format datenya
        // dateAxis.tooltip.

        let valueAxis = chart2.yAxes.push(new am4charts.ValueAxis()); // ini bagian valuenya atau y axes
        valueAxis.tooltip.disabled = true; // ini buat pengukuran, kalau dia disable berarti ga keluar(on hover) //
        // valueAxis.max = 70000; // max value

        let series = chart2.series.push(new am4charts.LineSeries()); // masukin chartingnnya
        series.dataFields.dateX = "date"; // deploy x as a
        series.dataFields.valueY = "value"; // deploy y as a value
        series.stroke = am4core.color("#f34848"); // warna graphic
        series.fill = am4core.color("#f34848"); // fill color
        series.fillOpacity = 0.2; // fill opacity

        series.tooltipText = "+{valueY.value}"; // buat on hover
        series.tooltip.stroke = am4core.color("white"); // warna tooltip
        // buat warnain background
        series.tooltip.getFillFromObject = false;
        series.tooltip.background.fill = am4core.color("black");
        // end of buat warnain background
        chart2.cursor = new am4charts.XYCursor(); // pm hover
        chart2.cursor.lineX.stroke = am4core.color("white"); // warna on hover
        chart2.cursor.lineY.stroke = am4core.color("white"); // warna on hover

        let scrollbarX = new am4charts.XYChartScrollbar(); // inisiate scrollbar
        scrollbarX.series.push(series); // masukin data ke scrollbar
        chart2.scrollbarX = scrollbarX; // masukin scrollbar di x
        chart2.scrollbarX.minHeight = 2; // atur ketinggian scrollbar
        chart2.scrollbarX.fontSize = 0; // font size scroll bar
        chart2.scrollbarX.startGrip.scale = 0.5; // bunderan scrollbar start
        chart2.scrollbarX.endGrip.scale = 0.5; // bunderan scrollbar end

        this.chart = chart2;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <div id={styles["cardChartPenambahanKasus"]}>
                <p className={styles["cardChartTotalKasus-judul"]}>Update Chart of National Daily Case Increased</p>
                <div className={styles["chartTotalKasus-container"]} id="chartdiv2" style={{ position: "relative", bottom: "20px", width: "100%", height: "220px" }}></div>
            </div>
        );
    }
}

export default CardChartPenambahanKasus;
