import React, { Component } from "react";
import {
    nusaTenggaraBarat,
    gorontalo,
    sulawesiTenggara,
    daerahIstimewaYogyakarta,
    jawaTengah,
    banten,
    jawaTimur,
    malukuUtara,
    maluku,
    sulawesiSelatan,
    dkiJakarta,
    jawaBarat,
    papua,
    nusaTenggaraTimur,
    bali,
    riau,
    kepulauanRiau,
    sulawesiBarat,
    sulawesiTengah,
    sulawesiUtara,
    papuaBarat,
    sumateraUtara,
    bangkaBelitung,
    sumateraBarat,
    sumateraSelatan,
    jambi,
    lampung,
    bengkulu,
    aceh,
    kalimantanBarat,
    kalimantanTengah,
    kalimantanSelatan,
    kalimantanTimur,
    kalimantanUtara,
} from "./CharloteMapsData";
import { Polygon, Popup } from "react-leaflet";

class Polygondata extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first: [],
        };
        this.handleMouseIn = this.handleMouseIn.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseIn = async (province) => {
        this.props.onMouseIn(province);
    };

    handleMouseOut = () => {
        this.props.onMouseOut("");
    };

    render() {
        return (
            <div>
                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("NUSA TENGGARA BARAT");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={nusaTenggaraBarat[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[16].warna}
                    fillColor={this.props.dataWarna[16].warna}
                >
                    <Popup>Nusa Tenggara Barat</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("GORONTALO");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={gorontalo[0].koordinat.map((data) => data.map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[25].warna}
                    fillColor={this.props.dataWarna[25].warna}
                >
                    <Popup>Gorontalo</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("SULAWESI TENGGARA");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={sulawesiTenggara[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[24].warna}
                    fillColor={this.props.dataWarna[24].warna}
                >
                    <Popup>Sulawesi Tenggara</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("DAERAH ISTIMEWA YOGYAKARTA");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={daerahIstimewaYogyakarta[0].koordinat.map((data) => data.map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[6].warna}
                    fillColor={this.props.dataWarna[6].warna}
                >
                    <Popup>Daerah Istimewa Yogyakarta</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("JAWA TENGAH");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={jawaTengah[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[5].warna}
                    fillColor={this.props.dataWarna[5].warna}
                ></Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("BANTEN");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={banten[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[14].warna}
                    fillColor={this.props.dataWarna[14].warna}
                >
                    <Popup>Banten</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("JAWA TIMUR");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={jawaTimur[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[7].warna}
                    fillColor={this.props.dataWarna[7].warna}
                >
                    <Popup>Jawa Timur</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("MALUKU UTARA");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={malukuUtara[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[28].warna}
                    fillColor={this.props.dataWarna[28].warna}
                >
                    <Popup>Maluku Utara</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("MALUKU");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={maluku[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[27].warna}
                    fillColor={this.props.dataWarna[27].warna}
                >
                    <Popup>Maluku</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("SULAWESI SELATAN");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={sulawesiSelatan[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[23].warna}
                    fillColor={this.props.dataWarna[23].warna}
                >
                    <Popup>sulawesiSelatan</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("DKI JAKARTA");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={dkiJakarta[0].koordinat.map((data) => data.map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[3].warna}
                    fillColor={this.props.dataWarna[3].warna}
                >
                    <Popup>dkiJakarta</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("JAWA BARAT");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={jawaBarat[0].koordinat.map((data) => data.map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[4].warna}
                    fillColor={this.props.dataWarna[4].warna}
                >
                    <Popup>jawaBarat</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("PAPUA");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={papua[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[29].warna}
                    fillColor={this.props.dataWarna[29].warna}
                >
                    <Popup>papua</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("NUSA TENGGARA TIMUR");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={nusaTenggaraTimur[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[17].warna}
                    fillColor={this.props.dataWarna[17].warna}
                >
                    <Popup>nusaTenggaraTimur</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("BALI");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={bali[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[15].warna}
                    fillColor={this.props.dataWarna[15].warna}
                >
                    <Popup>bali</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("RIAU");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={riau[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[11].warna}
                    fillColor={this.props.dataWarna[11].warna}
                >
                    <Popup>riau</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("KEPULAUAN RIAU");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={kepulauanRiau[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[2].warna}
                    fillColor={this.props.dataWarna[2].warna}
                >
                    <Popup>kepulauanRiau</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("SULAWESI BARAT");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={sulawesiBarat[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[26].warna}
                    fillColor={this.props.dataWarna[26].warna}
                >
                    <Popup>sulawesiBarat</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("SULAWESI TENGAH");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={sulawesiTengah[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[22].warna}
                    fillColor={this.props.dataWarna[22].warna}
                >
                    <Popup>sulawesiTengah</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("SULAWESI UTARA");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={sulawesiUtara[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[21].warna}
                    fillColor={this.props.dataWarna[21].warna}
                >
                    <Popup>sulawesiUtara</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("PAPUA BARAT");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={papuaBarat[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[30].warna}
                    fillColor={this.props.dataWarna[30].warna}
                >
                    <Popup>papuaBarat</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("SUMATERA UTARA");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={sumateraUtara[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[9].warna}
                    fillColor={this.props.dataWarna[9].warna}
                >
                    <Popup>sumateraUtara</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("KEPULAUAN BANGKA BELITUNG");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={bangkaBelitung[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[31].warna}
                    fillColor={this.props.dataWarna[31].warna}
                >
                    <Popup>bangkaBelitung</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("SUMATERA BARAT");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={sumateraBarat[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[10].warna}
                    fillColor={this.props.dataWarna[10].warna}
                >
                    <Popup>sumateraBarat</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("SUMATERA SELATAN");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={sumateraSelatan[0].koordinat.map((data) => data.map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[13].warna}
                    fillColor={this.props.dataWarna[13].warna}
                >
                    <Popup>sumateraSelatan</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("JAMBI");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={jambi[0].koordinat.map((data) => data.map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[12].warna}
                    fillColor={this.props.dataWarna[12].warna}
                >
                    <Popup>jambi</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("LAMPUNG");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={lampung[0].koordinat.map((data) => data.map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[1].warna}
                    fillColor={this.props.dataWarna[1].warna}
                >
                    <Popup>lampung</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("BENGKULU");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={bengkulu[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[0].warna}
                    fillColor={this.props.dataWarna[0].warna}
                >
                    <Popup>bengkulu</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("ACEH");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={aceh[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[8].warna}
                    fillColor={this.props.dataWarna[8].warna}
                >
                    <Popup>aceh</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("KALIMANTAN BARAT");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={kalimantanBarat[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[18].warna}
                    fillColor={this.props.dataWarna[18].warna}
                >
                    <Popup>kalimantanBarat</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("KALIMANTAN TENGAH");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={kalimantanTengah[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[32].warna}
                    fillColor={this.props.dataWarna[32].warna}
                >
                    <Popup>kalimantanTengah</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("KALIMANTAN SELATAN");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={kalimantanSelatan[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[19].warna}
                    fillColor={this.props.dataWarna[19].warna}
                >
                    <Popup>kalimantanSelatan</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("KALIMANTAN TIMUR");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={kalimantanTimur[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[20].warna}
                    fillColor={this.props.dataWarna[20].warna}
                >
                    <Popup>kalimantanTimur</Popup>
                </Polygon>

                <Polygon
                    eventHandlers={{
                        mouseover: () => {
                            this.handleMouseIn("KALIMANTAN UTARA");
                        },
                        mouseout: () => {
                            this.handleMouseOut();
                        },
                    }}
                    positions={kalimantanUtara[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
                    color={this.props.dataWarna[33].warna}
                    fillColor={this.props.dataWarna[33].warna}
                >
                    <Popup>kalimantanUtara</Popup>
                </Polygon>
            </div>
        );
    }
}

export default Polygondata;

// import React, { Component, Fragment } from "react";
// import {
//     nusaTenggaraBarat,
//     gorontalo,
//     sulawesiTenggara,
//     daerahIstimewaYogyakarta,
//     jawaTengah,
//     banten,
//     jawaTimur,
//     malukuUtara,
//     maluku,
//     sulawesiSelatan,
//     dkiJakarta,
//     jawaBarat,
//     papua,
//     nusaTenggaraTimur,
//     bali,
//     riau,
//     kepulauanRiau,
//     sulawesiBarat,
//     sulawesiTengah,
//     sulawesiUtara,
//     papuaBarat,
//     sumateraUtara,
//     bangkaBelitung,
//     sumateraBarat,
//     sumateraSelatan,
//     jambi,
//     lampung,
//     bengkulu,
//     aceh,
//     kalimantanBarat,
//     kalimantanTengah,
//     kalimantanSelatan,
//     kalimantanTimur,
//     kalimantanUtara,
// } from "./CharloteMapsData";
// import { Polygon, Popup } from "react-leaflet";
// import { dataWarna } from "../../IndonesiaCovidMapping";

// class Polygondata extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             first: [],
//         };
//         this.handleMouseIn = this.handleMouseIn.bind(this);
//         this.handleMouseOut = this.handleMouseOut.bind(this);
//     }

//     handleMouseIn = async (province) => {
//         this.props.onMouseIn(province);
//     };

//     handleMouseOut = () => {
//         this.props.onMouseOut("");
//     };

//     render() {
//         return (
//             <div>
//                 <dataWarna.Consumer>
//                     {(dataWarna) => (
//                         <Fragment>
//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("NUSA TENGGARA BARAT");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={nusaTenggaraBarat[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[16].warna}
//                                 fillColor={dataWarna[16].warna}
//                             >
//                                 <Popup>Nusa Tenggara Barat</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("GORONTALO");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={gorontalo[0].koordinat.map((data) => data.map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[25].warna}
//                                 fillColor={dataWarna[25].warna}
//                             >
//                                 <Popup>Gorontalo</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("SULAWESI TENGGARA");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={sulawesiTenggara[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[24].warna}
//                                 fillColor={dataWarna[24].warna}
//                             >
//                                 <Popup>Sulawesi Tenggara</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("DAERAH ISTIMEWA YOGYAKARTA");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={daerahIstimewaYogyakarta[0].koordinat.map((data) => data.map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[6].warna}
//                                 fillColor={dataWarna[6].warna}
//                             >
//                                 <Popup>Daerah Istimewa Yogyakarta</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("JAWA TENGAH");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={jawaTengah[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[5].warna}
//                                 fillColor={dataWarna[5].warna}
//                             ></Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("BANTEN");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={banten[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[14].warna}
//                                 fillColor={dataWarna[14].warna}
//                             >
//                                 <Popup>Banten</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("JAWA TIMUR");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={jawaTimur[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[7].warna}
//                                 fillColor={dataWarna[7].warna}
//                             >
//                                 <Popup>Jawa Timur</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("MALUKU UTARA");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={malukuUtara[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[28].warna}
//                                 fillColor={dataWarna[28].warna}
//                             >
//                                 <Popup>Maluku Utara</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("MALUKU");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={maluku[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[27].warna}
//                                 fillColor={dataWarna[27].warna}
//                             >
//                                 <Popup>Maluku</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("SULAWESI SELATAN");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={sulawesiSelatan[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[23].warna}
//                                 fillColor={dataWarna[23].warna}
//                             >
//                                 <Popup>sulawesiSelatan</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("DKI JAKARTA");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={dkiJakarta[0].koordinat.map((data) => data.map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[3].warna}
//                                 fillColor={dataWarna[3].warna}
//                             >
//                                 <Popup>dkiJakarta</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("JAWA BARAT");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={jawaBarat[0].koordinat.map((data) => data.map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[4].warna}
//                                 fillColor={dataWarna[4].warna}
//                             >
//                                 <Popup>jawaBarat</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("PAPUA");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={papua[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[29].warna}
//                                 fillColor={dataWarna[29].warna}
//                             >
//                                 <Popup>papua</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("NUSA TENGGARA TIMUR");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={nusaTenggaraTimur[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[17].warna}
//                                 fillColor={dataWarna[17].warna}
//                             >
//                                 <Popup>nusaTenggaraTimur</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("BALI");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={bali[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[15].warna}
//                                 fillColor={dataWarna[15].warna}
//                             >
//                                 <Popup>bali</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("RIAU");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={riau[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[11].warna}
//                                 fillColor={dataWarna[11].warna}
//                             >
//                                 <Popup>riau</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("KEPULAUAN RIAU");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={kepulauanRiau[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[2].warna}
//                                 fillColor={dataWarna[2].warna}
//                             >
//                                 <Popup>kepulauanRiau</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("SULAWESI BARAT");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={sulawesiBarat[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[26].warna}
//                                 fillColor={dataWarna[26].warna}
//                             >
//                                 <Popup>sulawesiBarat</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("SULAWESI TENGAH");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={sulawesiTengah[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[22].warna}
//                                 fillColor={dataWarna[22].warna}
//                             >
//                                 <Popup>sulawesiTengah</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("SULAWESI UTARA");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={sulawesiUtara[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[21].warna}
//                                 fillColor={dataWarna[21].warna}
//                             >
//                                 <Popup>sulawesiUtara</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("PAPUA BARAT");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={papuaBarat[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[30].warna}
//                                 fillColor={dataWarna[30].warna}
//                             >
//                                 <Popup>papuaBarat</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("SUMATERA UTARA");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={sumateraUtara[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[9].warna}
//                                 fillColor={dataWarna[9].warna}
//                             >
//                                 <Popup>sumateraUtara</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("KEPULAUAN BANGKA BELITUNG");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={bangkaBelitung[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[31].warna}
//                                 fillColor={dataWarna[31].warna}
//                             >
//                                 <Popup>bangkaBelitung</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("SUMATERA BARAT");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={sumateraBarat[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[10].warna}
//                                 fillColor={dataWarna[10].warna}
//                             >
//                                 <Popup>sumateraBarat</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("SUMATERA SELATAN");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={sumateraSelatan[0].koordinat.map((data) => data.map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[13].warna}
//                                 fillColor={dataWarna[13].warna}
//                             >
//                                 <Popup>sumateraSelatan</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("JAMBI");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={jambi[0].koordinat.map((data) => data.map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[12].warna}
//                                 fillColor={dataWarna[12].warna}
//                             >
//                                 <Popup>jambi</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("LAMPUNG");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={lampung[0].koordinat.map((data) => data.map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[1].warna}
//                                 fillColor={dataWarna[1].warna}
//                             >
//                                 <Popup>lampung</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("BENGKULU");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={bengkulu[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[0].warna}
//                                 fillColor={dataWarna[0].warna}
//                             >
//                                 <Popup>bengkulu</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("ACEH");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={aceh[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[8].warna}
//                                 fillColor={dataWarna[8].warna}
//                             >
//                                 <Popup>aceh</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("KALIMANTAN BARAT");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={kalimantanBarat[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[18].warna}
//                                 fillColor={dataWarna[18].warna}
//                             >
//                                 <Popup>kalimantanBarat</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("KALIMANTAN TENGAH");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={kalimantanTengah[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[32].warna}
//                                 fillColor={dataWarna[32].warna}
//                             >
//                                 <Popup>kalimantanTengah</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("KALIMANTAN SELATAN");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={kalimantanSelatan[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[19].warna}
//                                 fillColor={dataWarna[19].warna}
//                             >
//                                 <Popup>kalimantanSelatan</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("KALIMANTAN TIMUR");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={kalimantanTimur[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[20].warna}
//                                 fillColor={dataWarna[20].warna}
//                             >
//                                 <Popup>kalimantanTimur</Popup>
//                             </Polygon>

//                             <Polygon
//                                 eventHandlers={{
//                                     mouseover: () => {
//                                         this.handleMouseIn("KALIMANTAN UTARA");
//                                     },
//                                     mouseout: () => {
//                                         this.handleMouseOut();
//                                     },
//                                 }}
//                                 positions={kalimantanUtara[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))}
//                                 color={dataWarna[33].warna}
//                                 fillColor={dataWarna[33].warna}
//                             >
//                                 <Popup>kalimantanUtara</Popup>
//                             </Polygon>
//                         </Fragment>
//                     )}
//                 </dataWarna.Consumer>
//             </div>
//         );
//     }
// }

// export default Polygondata;
