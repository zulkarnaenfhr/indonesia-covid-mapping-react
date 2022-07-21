import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CovidMappingIndonesia.module.css";
import Navbar from "./containers/Navbar/Navbar";
import Section1 from "./containers/Section1/Section1";
import Section2 from "./containers/Section2/Section2";
import Footer from "./containers/Footer/Footer";

export default class CovidMappingIndonesia extends Component {
    constructor(props) {
        super(props);

        this.state = {
            indonesiaData: [], // buat data indonesia
            indonesiaDataHarian: [], // buat data harian indonesia
            dataChartUpdatePositif: [],
            provinceData: [], // buat data masing masing provinsi
            province: [], // data nama provinsi
            statusLoad: false, // status load api

            tanggalUpdate: [],
            totalKasus: [], // total kasus
            totalDirawat: [], // total kasus aktif
            totalSembuh: [], // total sembuh
            totalMeningggal: [], // total meninggal
            updateTotalKasus: [], // update total kasus
            updateTotalDirawat: [], // update total kasus aktif
            updateTotalSembuh: [], // update total sembuh
            updateTotalMeningggal: [], // update total meninggal

            dataVaksin: [], // penyimpanan data vaksin
            jumlahVaksin1: 0,
            jumlahVaksin2: 0,

            statusActive: "upPositif",
            // untuk data charting
            indonesiaDataHarianJumlahJumlahPositif: [],
            indonesiaDataHarianJumlahUpdatePositif: [],
            indonesiaDataHarianJumlahUpdateSembuh: [],
            indonesiaDataHarianJumlahUpdateMeninggal: [],
            // end of untuk data charting

            // untuk warna map
            cityScore: [],
            allProvinceName: [],
            warnaProvinsi: [],
            provinceDanger: [], // province resiko tinggi
            // untuk warna map

            // untuk infor map
            provinceName: "",
            provinceJumlahKasus: 0,
            // end of untuk infor map

            // untuk berita covid
            beritaCovid: [],
            // end of untuk berita covid
        };
        this.getProvinceData = this.getProvinceData.bind(this);
        this.getIndonesiaData = this.getIndonesiaData.bind(this);
        this.getIndonesiaDataHarian = this.getIndonesiaDataHarian.bind(this);
        this.getDataVaksin = this.getDataVaksin.bind(this);
        this.handleProvinceChange = this.handleProvinceChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleActivePositif = this.handleActivePositif.bind(this);
        this.handleActiveKesembuhan = this.handleActiveKesembuhan.bind(this);
        this.handleActiveMeninggal = this.handleActiveMeninggal.bind(this);
        this.getCityScoreData = this.getCityScoreData.bind(this);
        this.getSeluruhProvince = this.getSeluruhProvince.bind(this);
        this.getWarnaMaps = this.getWarnaMaps.bind(this);
        this.getBeritaCovid = this.getBeritaCovid.bind(this);
    }

    handleActivePositif = () => {
        this.setState({
            statusActive: "upPositif",
        });
    };

    handleActiveKesembuhan = () => {
        this.setState({
            statusActive: "upSembuh",
        });
    };

    handleActiveMeninggal = () => {
        this.setState({
            statusActive: "upMeninggal",
        });
    };

    handleReset = async () => {
        await this.setState({
            indonesiaData: [], // buat data indonesia
            indonesiaDataHarian: [], // buat data harian indonesia
            dataChartUpdatePositif: [],
            provinceData: [], // buat data masing masing provinsi
            province: [], // data nama provinsi
            statusLoad: false, // status load api

            tanggalUpdate: [],
            totalKasus: [], // total kasus
            totalDirawat: [], // total kasus aktif
            totalSembuh: [], // total sembuh
            totalMeningggal: [], // total meninggal
            updateTotalKasus: [], // update total kasus
            updateTotalDirawat: [], // update total kasus aktif
            updateTotalSembuh: [], // update total sembuh
            updateTotalMeningggal: [], // update total meninggal

            dataVaksin: [], // penyimpanan data vaksin

            statusActive: "upPositif",
            // untuk data charting
            indonesiaDataHarianJumlahJumlahPositif: [],
            indonesiaDataHarianJumlahUpdatePositif: [],
            indonesiaDataHarianJumlahUpdateSembuh: [],
            indonesiaDataHarianJumlahUpdateMeninggal: [],
            // end of untuk data charting

            // untuk warna map
            cityScore: [],
            allProvinceName: [],
            warnaProvinsi: [],
            provinceDanger: [], // province resiko tinggi
            // untuk warna map

            // untuk infor map
            provinceName: "",
            provinceJumlahKasus: 0,
            // end of untuk infor map

            // untuk berita covid
            beritaCovid: [],
            // end of untuk berita covid
        });
        await this.getIndonesiaData();
        await this.getIndonesiaDataHarian();
        await this.getProvinceData();
        await this.getDataVaksin();
        await this.getCityScoreData();
        await setTimeout(async () => {
            await this.getBeritaCovid();
            await this.getWarnaMaps();
            this.setState({
                statusLoad: true,
            });
        }, 5000);
    };

    getBeritaCovid = async () => {
        fetch("https://api-covid-indonesia.herokuapp.com/feedBerita")
            .then((response) => response.json())
            .then((dataBerita) =>
                this.setState({
                    beritaCovid: dataBerita.articles,
                })
            );
    };

    getWarnaMaps = async () => {
        await this.getSeluruhProvince();
    };

    getSeluruhProvince = async () => {
        await this.state.cityScore.map((data) => {
            if (!this.state.allProvinceName.includes(data.prov)) {
                this.state.allProvinceName.push(data.prov);
            }
        });
        await this.state.allProvinceName.map((prov) => {
            let resRendah = 0;
            let resSedang = 0;
            let resTinggi = 0;
            this.state.cityScore.map((data) => {
                if (data.prov === prov) {
                    if (data.hasil === "RESIKO RENDAH") {
                        resRendah += 1;
                    } else if (data.hasil === "RESIKO SEDANG") {
                        resSedang += 1;
                    } else {
                        resTinggi += 1;
                    }
                }
            });
            if (resRendah > resSedang && resRendah > resTinggi) {
                this.state.warnaProvinsi.push({
                    provinsi: prov,
                    warna: "#39f245",
                });
            } else if (resSedang > resRendah && resSedang > resTinggi) {
                this.state.warnaProvinsi.push({
                    provinsi: prov,
                    warna: "#fabb48",
                });
            } else {
                this.state.warnaProvinsi.push({
                    provinsi: prov,
                    warna: "#ff0000",
                });
                this.state.provinceDanger.push({
                    province: prov,
                });
            }
        });
    };

    getCityScoreData = async () => {
        fetch("https://indonesian-covid-api.herokuapp.com/v1/risk-score-provinsi")
            .then((response) => response.json())
            .then((data) =>
                this.setState({
                    cityScore: data.data,
                })
            );
    };

    handleProvinceChange = async (event) => {
        if (event.target.value === "") {
            this.handleReset();
        } else {
            await this.setState({
                totalKasus: [],
                totalDirawat: [],
                totalSembuh: [],
                totalMeningggal: [],
                updateTotalKasus: [],
                updateTotalDirawat: [],
                updateTotalSembuh: [],
                updateTotalMeningggal: [],
            });

            await this.state.provinceData.map((data) => {
                if (data.key === event.target.value) {
                    this.setState({
                        totalKasus: data.jumlah_kasus,
                        totalDirawat: data.jumlah_dirawat,
                        totalSembuh: data.jumlah_sembuh,
                        totalMeningggal: data.jumlah_meninggal,
                        updateTotalKasus: data.penambahan.positif,
                        updateTotalDirawat: data.penambahan.positif,
                        updateTotalSembuh: data.penambahan.sembuh,
                        updateTotalMeningggal: data.penambahan.meninggal,
                        statusLoad: true,
                    });
                }
            });
        }
    };

    getIndonesiaData = async () => {
        // mengambil data indonesia
        let indonesiaData = "";
        await fetch("https://indonesian-covid-api.herokuapp.com/v1/update-harian-indonesia")
            .then((response) => response.json())
            .then((data) => {
                indonesiaData = data;
                this.setState({
                    indonesiaData: data,
                    tanggalUpdate: data.update.penambahan.tanggal,
                    totalKasus: data.update.total.jumlah_positif,
                    totalDirawat: data.update.total.jumlah_dirawat,
                    totalSembuh: data.update.total.jumlah_sembuh,
                    totalMeningggal: data.update.total.jumlah_meninggal,
                    updateTotalKasus: data.update.penambahan.jumlah_positif,
                    updateTotalDirawat: data.update.penambahan.jumlah_dirawat,
                    updateTotalSembuh: data.update.penambahan.jumlah_sembuh,
                    updateTotalMeningggal: data.update.penambahan.jumlah_meninggal,
                });
            });
        // akhir mengambil data indonesia
    };

    getIndonesiaDataHarian = async () => {
        await fetch("https://indonesian-covid-api.herokuapp.com/v1/update-harian-indonesia")
            .then((response) => response.json())
            .then((data) =>
                this.setState({
                    indonesiaDataHarian: data.update.harian,
                })
            )
            .then(() => {
                this.state.indonesiaDataHarian.map((data) => {
                    this.state.indonesiaDataHarianJumlahJumlahPositif.push({
                        positif_kumulatif: data.jumlah_positif_kum.value,
                        tanggal: data.key_as_string,
                    });

                    this.state.indonesiaDataHarianJumlahUpdatePositif.push({
                        tanggal: data.key_as_string,
                        value: data.jumlah_positif.value,
                    });

                    this.state.indonesiaDataHarianJumlahUpdateSembuh.push({
                        tanggal: data.key_as_string,
                        value: data.jumlah_sembuh.value,
                    });

                    this.state.indonesiaDataHarianJumlahUpdateMeninggal.push({
                        tanggal: data.key_as_string,
                        value: data.jumlah_meninggal.value,
                    });
                });
            });
    };

    getProvinceData = async () => {
        // mengambil data provinsi
        await fetch("https://indonesian-covid-api.herokuapp.com/v1/kasus-seluruh-provinsi")
            .then((response) => response.json())
            .then((data) =>
                this.setState({
                    provinceData: data.list_data,
                })
            )
            .then(() => {
                this.state.provinceData.map((data) => {
                    this.state.province.push(data.key);
                });
            })
            .then(() => {
                function compare(a, b) {
                    if (a.jumlah_kasus > b.jumlah_kasus) {
                        return -1;
                    }
                    if (a.jumlah_kasus < b.jumlah_kasus) {
                        return 1;
                    }
                    return 0;
                }
                this.state.provinceData.sort(compare);
            });

        // mengambil seluruh nama provinsi
    };

    getDataVaksin = async () => {
        // mengambil data vaksin
        await fetch("https://indonesian-covid-api.herokuapp.com/v1/pemeriksaan-dan-vaksinasi")
            .then((response) => response.json())
            .then((data) =>
                this.setState({
                    jumlahVaksin1: data.vaksinasi.total.jumlah_vaksinasi_1,
                    jumlahVaksin2: data.vaksinasi.total.jumlah_vaksinasi_2,
                })
            );
    };

    async componentDidMount() {
        await this.handleReset();
    }

    render() {
        return (
            <div id={styles["Home-Container"]}>
                <Navbar tanggalUpdate={this.state.tanggalUpdate} statusLoad={this.state.statusLoad} province={this.state.allProvinceName} provChange={(event) => this.handleProvinceChange(event)} />{" "}
                <Section1
                    statusLoad={this.state.statusLoad}
                    totalCasedTotalCased={this.state.totalKasus}
                    updatedCasedTotalCased={this.state.updateTotalKasus}
                    totalCasedActiveCased={this.state.totalDirawat}
                    updatedCasedActiveCased={this.state.updateTotalDirawat}
                    totalCasedRecoveryCased={this.state.totalSembuh}
                    updatedCasedRecoveryCased={this.state.updateTotalSembuh}
                    totalCasedDeathCased={this.state.totalMeningggal}
                    updatedCasedDeathCased={this.state.updateTotalMeningggal}
                    VaccinationTotal1={this.state.jumlahVaksin1}
                    VaccinationTotal2={this.state.jumlahVaksin2}
                />
                <Section2 statusLoad={this.state.statusLoad} data={this.state.indonesiaDataHarian} provinceData={this.state.provinceData} beritaCovid={this.state.beritaCovid} warnaProvinsi={this.state.warnaProvinsi} />
                <Footer />
                {/* <button onClick={() => console.log(this.state.indonesiaDataHarian)}>masd</button> */}
            </div>
        );
    }
}
