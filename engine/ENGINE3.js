// ENGINE3 – Dreieck-Axiom (Summe der Innenwinkel = 180°)

export function ENGINE3(a, b, c) {

    // Heron-Formel für Fläche
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return {
        engine: "ENGINE3",
        axiom: "Summe der Innenwinkel = 180°",
        sides: { a, b, c },
        perimeter: a + b + c,
        area,
        status: "SAT-TRIANGLE-PROCESSED"
    };
}
