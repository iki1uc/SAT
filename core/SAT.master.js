import { ENGINE1 } from "../engine/ENGINE1.js";
import { ENGINE3 } from "../engine/ENGINE3.js";
import { ENGINE4 } from "../engine/ENGINE4.js";
import { ENGINE9 } from "../engine/ENGINE9.js";
import { ENGINE12 } from "../engine/ENGINE12.js";

import { STATION_MASTER } from "../station/STATION.master.js";

import { VECTOR_3D } from "../vector/VECTOR.3D.js";
import { VECTOR_LAYER } from "../vector/VECTOR.layer.js";
import { VECTOR_STATION } from "../vector/VECTOR.station.js";

export function SAT_MASTER() {

    const engines = {
        e1: ENGINE1("SAT"),
        e3: ENGINE3(3),
        e4: ENGINE4(4),
        e9: ENGINE9(9),
        e12: ENGINE12(12)
    };

    const vectors = {
        v3d: VECTOR_3D(10, 20, 30),
        layer: VECTOR_LAYER("SAT-LAYER", 1),
        station: VECTOR_STATION("SAT-POINT", 10, 20, 30)
    };

    const stations = STATION_MASTER("D:/tmp", "D:/tmp/reference");

    return {
        status: "SAT-MASTER-READY",
        engines,
        vectors,
        stations
    };
}
