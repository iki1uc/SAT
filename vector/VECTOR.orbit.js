export function VECTOR_ORBIT(angle) {
    return {
        x: Math.sin(angle / 20) * 200,
        y: Math.cos(angle / 20) * 200,
        type: "VECTOR-ORBIT"
    };
}

