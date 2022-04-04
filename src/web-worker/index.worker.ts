import { expose } from "comlink";

import { findHash } from "./HashGenerator";

const methodsForExport = {
  findHash,
};

export type WebWorker = typeof methodsForExport;

expose(methodsForExport);

// next trick is done to pass TS checks
// in fact not exported value,
// but value provided by worker-loader will be used
interface WebWorkerConstructor {
  new (): WebWorker;
}

// eslint-disable-next-line no-restricted-syntax
export default (null as unknown) as WebWorkerConstructor;
