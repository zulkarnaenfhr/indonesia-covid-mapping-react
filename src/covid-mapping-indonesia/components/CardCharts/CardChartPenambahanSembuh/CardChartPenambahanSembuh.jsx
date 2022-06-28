import React, { Component } from "react";
import styles from "./CardChartPenambahanSembuh.module.css";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class CardChartPenambahanSembuh extends Component {
    componentDidMount() {
        let chart3 = am4core.create("chartdiv3", am4charts.XYChart); // declare dulu

        chart3.paddingRight = 20;

        let data3 = [];

        // buat ambil data
        for (let i = 0; i < this.props.data.length; i++) {
            data3.push({
                date: this.props.data[i].key_as_string,
                value: this.props.data[i].jumlah_sembuh.value,
            });
        }
        // end of buat ambil data

        chart3.data = data3; // masukin datanya
        chart3.stroke = am4core.color("white"); // warna border sama tulisan dari chart container

        let dateAxis = chart3.xAxes.push(new am4charts.DateAxis()); // deploy x nya
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.tooltip.stroke = am4core.color("white"); // tulisan yang ada di tooltip
        dateAxis.dateFormats.setKey("day", "dd MMM yy"); // format datenya
        // dateAxis.tooltip.

        let valueAxis = chart3.yAxes.push(new am4charts.ValueAxis()); // ini bagian valuenya atau y axes
        valueAxis.tooltip.disabled = true; // ini buat pengukuran, kalau dia disable berarti ga keluar(on hover) //
        // valueAxis.strictMinMax = true;

        let series = chart3.series.push(new am4charts.LineSeries()); // masukin chartingnnya
        series.dataFields.dateX = "date"; // deploy x as a
        series.dataFields.valueY = "value"; // deploy y as a value
        series.stroke = am4core.color("#1eec1e"); // warna graphic
        series.fill = am4core.color("#1eec1e"); // fill color
        series.fillOpacity = 0.2; // fill opacity

        series.tooltipText = "+{valueY.value}"; // buat on hover
        series.tooltip.stroke = am4core.color("white"); // warna tooltip
        // buat warnain background
        series.tooltip.getFillFromObject = false;
        series.tooltip.background.fill = am4core.color("black");
        // end of buat warnain background
        chart3.cursor = new am4charts.XYCursor(); // pm hover
        chart3.cursor.lineX.stroke = am4core.color("white"); // warna on hover
        chart3.cursor.lineY.stroke = am4core.color("white"); // warna on hover

        let scrollbarX = new am4charts.XYChartScrollbar(); // inisiate scrollbar
        scrollbarX.series.push(series); // masukin data ke scrollbar
        chart3.scrollbarX = scrollbarX; // masukin scrollbar di x
        chart3.scrollbarX.minHeight = 2; // atur ketinggian scrollbar
        chart3.scrollbarX.fontSize = 0; // font size scroll bar
        chart3.scrollbarX.startGrip.scale = 0.5; // bunderan scrollbar start
        chart3.scrollbarX.endGrip.scale = 0.5; // bunderan scrollbar end

        this.chart = chart3;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <div id={styles["cardChartPenambahanKasus"]}>
                <p className={styles["cardChartTotalKasus-judul"]}>National Daily Healing Update Chart</p>
                <div className={styles["chartTotalKasus-container"]} id="chartdiv3" style={{ position: "relative", bottom: "20px", width: "100%", height: "220px" }}></div>
            </div>
        );
    }
}

export default CardChartPenambahanSembuh;
