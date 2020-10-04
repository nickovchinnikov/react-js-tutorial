import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import serializer from "jest-emotion";

Enzyme.configure({ adapter: new Adapter() });

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
