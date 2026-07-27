import fs from "fs";
import stations from "./STATION.map.json" assert { type: "json" };

export function STATION_DEP_SCAN() {
    const dependencies = {};
    stations.stations.forEach(station => {
        if (fs.existsSync(station.path)) {
            const files = fs.readdirSync(station.path);
            files.forEach(file => {
                const ext = file.split(".").pop();
                dependencies[ext] = (dependencies[ext] || 0) + 1;
            });
        }
    });
    fs.writeFileSync("./STATION.dependencies.json", JSON.stringify(dependencies, null, 2));
    return { status: "SAT-DEPENDENCIES-SCANNED", dependencies };
}
