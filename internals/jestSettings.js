import serializer from "jest-emotion";

expect.addSnapshotSerializer(serializer);

// https://github.com/facebook/jest/issues/3449#issuecomment-347337666
class Worker {
  constructor(stringUrl) {
    this.url = stringUrl;
    this.onmessage = () => undefined;
  }

  postMessage(msg) {
    this.onmessage(msg);
  }
}

window.Worker = Worker;
