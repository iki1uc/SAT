export function ENGINE3(f) {
    const a = f + 1;
    const b = f + 2;
    const c = f + 3;

    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return `ENGINE3 TRIANGLE → a:${a} b:${b} c:${c} area:${area.toFixed(2)}`;
}
