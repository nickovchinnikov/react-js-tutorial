import { expose } from "comlink";

import { findHash } from "./HashGenerator";

const methodsForExport = {
  findHash,
};

export type WebWorker = typeof methodsForExport;

expose(methodsForExport);
