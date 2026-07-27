import { VECTOR_B } from "./VECTOR.B.js";
import { VECTOR_H } from "./VECTOR.H.js";
import { VECTOR_T } from "./VECTOR.T.js";

export function VECTOR_3D(x,y,z){
    return {...VECTOR_B(x), ...VECTOR_H(y), ...VECTOR_T(z)};
}

