// ENGINE4 – Quadrat-Axiom (alle Seiten gleich, alle Winkel 90°)

export function ENGINE4(s) {
    return {
        engine: "ENGINE4",
        axiom: "Alle Seiten gleich, alle Winkel 90°",
        side: s,
        perimeter: 4 * s,
        area: s * s,
        diagonal: Math.sqrt(2) * s,
        status: "SAT-SQUARE-PROCESSED"
    };
}
