import { SAT_MASTER } from "./SAT.core.master.js";

export const SAT_CONNECTOR = {
    connect() {
        return SAT_MASTER.init();
    }
};

