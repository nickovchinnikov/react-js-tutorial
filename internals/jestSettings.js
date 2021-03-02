import serializer from "jest-emotion";

expect.addSnapshotSerializer(serializer);

jest.mock(
  "@/web-worker/index.worker",
  () =>
    class Worker {
      onmessage = () => null;
      postMessage = () => null;
    }
);
