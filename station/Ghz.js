import fs from "fs";
import stations from "./STATION.map.json" assert { type: "json" };

export function STATION_COMPARE(referencePath) {
    const referenceFiles = fs.readdirSync(referencePath);
    const report = [];

    stations.stations.forEach(station => {
        if (fs.existsSync(station.path)) {
            const files = fs.readdirSync(station.path);
            const missing = referenceFiles.filter(f => !files.includes(f));
            const extra = files.filter(f => !referenceFiles.includes(f));
            report.push({ station: station.id, missing, extra });
        }
    });

    fs.writeFileSync("./STATION.compare.json", JSON.stringify(report, null, 2));
    return { status: "SAT-STATION-COMPARED", report };
}
