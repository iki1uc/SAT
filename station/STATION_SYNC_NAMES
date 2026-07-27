import fs from "fs";
import stations from "./STATION.map.json" assert { type: "json" };

export function STATION_SYNC_AUTO(referencePath, interval = 60000) {
    console.log("SAT-STATION-SYNC gestartet…");
    setInterval(() => {
        const referenceFiles = fs.readdirSync(referencePath);
        stations.stations.forEach(station => {
            if (fs.existsSync(station.path)) {
                const files = fs.readdirSync(station.path);
                referenceFiles.forEach((name, i) => {
                    const target = station.path + "/" + files[i];
                    const newName = station.path + "/" + name;
                    try {
                        fs.renameSync(target, newName);
                    } catch (err) {
                        console.log(`Fehler bei ${target}:`, err.message);
                    }
                });
            }
        });
        console.log("SAT-STATION-SYNC abgeschlossen.");
    }, interval);
}
