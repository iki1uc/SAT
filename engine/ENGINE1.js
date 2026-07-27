// ENGINE1 – SAT TMP Processor
// verarbeitet große Datenmengen (TMP, RAW, BUFFER, STREAM)

export function ENGINE1(tmp) {

    // 1. Typ bestimmen
    const type =
        Array.isArray(tmp) ? "array" :
        typeof tmp === "string" ? "string" :
        typeof tmp === "object" ? "object" :
        "unknown";

    // 2. Größe bestimmen
    const size =
        typeof tmp === "string" ? tmp.length :
        Array.isArray(tmp) ? tmp.length :
        typeof tmp === "object" ? Object.keys(tmp).length :
        0;

    // 3. Hash erzeugen (leicht, schnell)
    const hash = Math.abs(
        JSON.stringify(tmp)
            .split("")
            .reduce((a, c) => a + c.charCodeAt(0), 0)
    );

    // 4. SAT‑Output erzeugen
    return {
        engine: "ENGINE1",
        type,
        size,
        hash,
        preview: JSON.stringify(tmp).slice(0, 200), // sicher
        status: "SAT-TMP-PROCESSED"
    };
}
