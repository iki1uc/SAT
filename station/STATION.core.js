import stations from "./STATION.map.json" assert { type: "json" };
import fs from "fs";

export function STATION_SYNC_NAMES(referencePath) {
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

    return { status: "SAT-STATION-NAMES-SYNCED", reference: referencePath };
}
