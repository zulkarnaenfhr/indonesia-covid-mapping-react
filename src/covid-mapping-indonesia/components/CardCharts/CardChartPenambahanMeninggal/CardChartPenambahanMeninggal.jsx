import React, { Component } from "react";
import styles from "./CardChartPenambahanMeninggal.module.css";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class CardChartPenambahanMeninggal extends Component {
    componentDidMount() {
        let chart4 = am4core.create("chartdiv4", am4charts.XYChart); // declare dulu

        chart4.paddingRight = 20;

        let data4 = [];

        // buat ambil data
        for (let i = 0; i < this.props.data.length; i++) {
            data4.push({
                date: this.props.data[i].key_as_string,
                value: this.props.data[i].jumlah_meninggal.value,
            });
        }
        // end of buat ambil data

        chart4.data = data4; // masukin datanya
        chart4.stroke = am4core.color("white"); // warna border sama tulisan dari chart container

        let dateAxis = chart4.xAxes.push(new am4charts.DateAxis()); // deploy x nya
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.tooltip.stroke = am4core.color("white"); // tulisan yang ada di tooltip
        dateAxis.dateFormats.setKey("day", "dd MMM yy"); // format datenya
        // dateAxis.tooltip.

        let valueAxis = chart4.yAxes.push(new am4charts.ValueAxis()); // ini bagian valuenya atau y axes
        valueAxis.tooltip.disabled = true; // ini buat pengukuran, kalau dia disable berarti ga keluar(on hover) //
        // valueAxis.strictMinMax = true;

        let series = chart4.series.push(new am4charts.LineSeries()); // masukin chartingnnya
        series.dataFields.dateX = "date"; // deploy x as a
        series.dataFields.valueY = "value"; // deploy y as a value
        series.stroke = am4core.color("#C0BEBE"); // warna graphic
        series.fill = am4core.color("#C0BEBE"); // fill color
        series.fillOpacity = 0.2; // fill opacity

        series.tooltipText = "+{valueY.value}"; // buat on hover
        series.tooltip.stroke = am4core.color("white"); // warna tooltip
        // buat warnain background
        series.tooltip.getFillFromObject = false;
        series.tooltip.background.fill = am4core.color("black");
        // end of buat warnain background
        chart4.cursor = new am4charts.XYCursor(); // pm hover
        chart4.cursor.lineX.stroke = am4core.color("white"); // warna on hover
        chart4.cursor.lineY.stroke = am4core.color("white"); // warna on hover

        let scrollbarX = new am4charts.XYChartScrollbar(); // inisiate scrollbar
        scrollbarX.series.push(series); // masukin data ke scrollbar
        chart4.scrollbarX = scrollbarX; // masukin scrollbar di x
        chart4.scrollbarX.minHeight = 2; // atur ketinggian scrollbar
        chart4.scrollbarX.fontSize = 0; // font size scroll bar
        chart4.scrollbarX.startGrip.scale = 0.5; // bunderan scrollbar start
        chart4.scrollbarX.endGrip.scale = 0.5; // bunderan scrollbar end

        this.chart = chart4;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <div id={styles["cardChartPenambahanKasus"]}>
                <p className={styles["cardChartTotalKasus-judul"]}>National Daily Death Update Chart</p>
                <div className={styles["chartTotalKasus-container"]} id="chartdiv4" style={{ position: "relative", bottom: "20px", width: "100%", height: "220px" }}></div>
            </div>
        );
    }
}

export default CardChartPenambahanMeninggal;
