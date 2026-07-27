export function ENGINE4(f) {
    const side = f + 1;
    const area = side * side;
    const diag = Math.sqrt(2) * side;

    return `ENGINE4 SQUARE → side:${side} area:${area} diag:${diag.toFixed(2)}`;
}
