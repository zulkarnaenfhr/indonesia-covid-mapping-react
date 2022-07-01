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
    }

    render() {
        return (
            <div>
                <Polygon positions={nusaTenggaraBarat[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[16].warna} fillColor={this.props.dataWarna[16].warna}>
                    <Popup>Nusa Tenggara Barat</Popup>
                </Polygon>

                <Polygon positions={gorontalo[0].koordinat.map((data) => data.map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[25].warna} fillColor={this.props.dataWarna[25].warna}>
                    <Popup>Gorontalo</Popup>
                </Polygon>

                <Polygon positions={sulawesiTenggara[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[24].warna} fillColor={this.props.dataWarna[24].warna}>
                    <Popup>Sulawesi Tenggara</Popup>
                </Polygon>

                <Polygon positions={daerahIstimewaYogyakarta[0].koordinat.map((data) => data.map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[6].warna} fillColor={this.props.dataWarna[6].warna}>
                    <Popup>Daerah Istimewa Yogyakarta</Popup>
                </Polygon>

                <Polygon positions={jawaTengah[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[5].warna} fillColor={this.props.dataWarna[5].warna}></Polygon>

                <Polygon positions={banten[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[14].warna} fillColor={this.props.dataWarna[14].warna}>
                    <Popup>Banten</Popup>
                </Polygon>

                <Polygon positions={jawaTimur[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[7].warna} fillColor={this.props.dataWarna[7].warna}>
                    <Popup>Jawa Timur</Popup>
                </Polygon>

                <Polygon positions={malukuUtara[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[28].warna} fillColor={this.props.dataWarna[28].warna}>
                    <Popup>Maluku Utara</Popup>
                </Polygon>

                <Polygon positions={maluku[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[27].warna} fillColor={this.props.dataWarna[27].warna}>
                    <Popup>Maluku</Popup>
                </Polygon>

                <Polygon positions={sulawesiSelatan[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[23].warna} fillColor={this.props.dataWarna[23].warna}>
                    <Popup>sulawesiSelatan</Popup>
                </Polygon>

                <Polygon positions={dkiJakarta[0].koordinat.map((data) => data.map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[3].warna} fillColor={this.props.dataWarna[3].warna}>
                    <Popup>dkiJakarta</Popup>
                </Polygon>

                <Polygon positions={jawaBarat[0].koordinat.map((data) => data.map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[4].warna} fillColor={this.props.dataWarna[4].warna}>
                    <Popup>jawaBarat</Popup>
                </Polygon>

                <Polygon positions={papua[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[29].warna} fillColor={this.props.dataWarna[29].warna}>
                    <Popup>papua</Popup>
                </Polygon>

                <Polygon positions={nusaTenggaraTimur[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[17].warna} fillColor={this.props.dataWarna[17].warna}>
                    <Popup>nusaTenggaraTimur</Popup>
                </Polygon>

                <Polygon positions={bali[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[15].warna} fillColor={this.props.dataWarna[15].warna}>
                    <Popup>bali</Popup>
                </Polygon>

                <Polygon positions={riau[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[11].warna} fillColor={this.props.dataWarna[11].warna}>
                    <Popup>riau</Popup>
                </Polygon>

                <Polygon positions={kepulauanRiau[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[2].warna} fillColor={this.props.dataWarna[2].warna}>
                    <Popup>kepulauanRiau</Popup>
                </Polygon>

                <Polygon positions={sulawesiBarat[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[26].warna} fillColor={this.props.dataWarna[26].warna}>
                    <Popup>sulawesiBarat</Popup>
                </Polygon>

                <Polygon positions={sulawesiTengah[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[22].warna} fillColor={this.props.dataWarna[22].warna}>
                    <Popup>sulawesiTengah</Popup>
                </Polygon>

                <Polygon positions={sulawesiUtara[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[21].warna} fillColor={this.props.dataWarna[21].warna}>
                    <Popup>sulawesiUtara</Popup>
                </Polygon>

                <Polygon positions={papuaBarat[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[30].warna} fillColor={this.props.dataWarna[30].warna}>
                    <Popup>papuaBarat</Popup>
                </Polygon>

                <Polygon positions={sumateraUtara[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[9].warna} fillColor={this.props.dataWarna[9].warna}>
                    <Popup>sumateraUtara</Popup>
                </Polygon>

                <Polygon positions={bangkaBelitung[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[31].warna} fillColor={this.props.dataWarna[31].warna}>
                    <Popup>bangkaBelitung</Popup>
                </Polygon>

                <Polygon positions={sumateraBarat[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[10].warna} fillColor={this.props.dataWarna[10].warna}>
                    <Popup>sumateraBarat</Popup>
                </Polygon>

                <Polygon positions={sumateraSelatan[0].koordinat.map((data) => data.map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[13].warna} fillColor={this.props.dataWarna[13].warna}>
                    <Popup>sumateraSelatan</Popup>
                </Polygon>

                <Polygon positions={jambi[0].koordinat.map((data) => data.map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[12].warna} fillColor={this.props.dataWarna[12].warna}>
                    <Popup>jambi</Popup>
                </Polygon>

                <Polygon positions={lampung[0].koordinat.map((data) => data.map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[1].warna} fillColor={this.props.dataWarna[1].warna}>
                    <Popup>lampung</Popup>
                </Polygon>

                <Polygon positions={bengkulu[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[0].warna} fillColor={this.props.dataWarna[0].warna}>
                    <Popup>bengkulu</Popup>
                </Polygon>

                <Polygon positions={aceh[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[8].warna} fillColor={this.props.dataWarna[8].warna}>
                    <Popup>aceh</Popup>
                </Polygon>

                <Polygon positions={kalimantanBarat[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[18].warna} fillColor={this.props.dataWarna[18].warna}>
                    <Popup>kalimantanBarat</Popup>
                </Polygon>

                <Polygon positions={kalimantanTengah[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[32].warna} fillColor={this.props.dataWarna[32].warna}>
                    <Popup>kalimantanTengah</Popup>
                </Polygon>

                <Polygon positions={kalimantanSelatan[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[19].warna} fillColor={this.props.dataWarna[19].warna}>
                    <Popup>kalimantanSelatan</Popup>
                </Polygon>

                <Polygon positions={kalimantanTimur[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[20].warna} fillColor={this.props.dataWarna[20].warna}>
                    <Popup>kalimantanTimur</Popup>
                </Polygon>

                <Polygon positions={kalimantanUtara[0].koordinat.map((data) => data[0].map((koor) => [koor[1], koor[0]]))} color={this.props.dataWarna[33].warna} fillColor={this.props.dataWarna[33].warna}>
                    <Popup>kalimantanUtara</Popup>
                </Polygon>
            </div>
        );
    }
}

export default Polygondata;
