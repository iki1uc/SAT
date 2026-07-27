export function ENGINE9(f) {
    const a = f + 1;
    const b = f + 2;
    const c = f + 3;

    const perimeter = a + b + c;
    const squareSide = perimeter / 4;

    return `ENGINE9 MORPH → triangle:${a},${b},${c} → squareSide:${squareSide.toFixed(2)}`;
}
