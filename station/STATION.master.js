import { STATION_SYNC_NAMES } from "./STATION.core.js";
import { STATION_SYNC_AUTO } from "./STATION_SYNC_NAMES.js";
import { STATION_MAP_GENERATE } from "./STATION.map.json";
import { STATION_COMPARE } from "./Ghz.js";
import { STATION_DEP_SCAN } from "./scan.js";

export function STATION_MASTER(basePath, referencePath) {

    // 1. Map generieren
    const map = STATION_MAP_GENERATE(basePath);

    // 2. Einmalige Synchronisation
    const sync = STATION_SYNC_NAMES(referencePath);

    // 3. Automatische Synchronisation
    STATION_SYNC_AUTO(referencePath, 60000);

    // 4. Vergleichsbericht
    const compare = STATION_COMPARE(referencePath);

    // 5. Abhängigkeits-Scan
    const deps = STATION_DEP_SCAN();

    return {
        status: "SAT-STATION-MASTER-READY",
        map,
        sync,
        compare,
        deps
    };
}
