import React from "react";
import { getUrl } from "./utils";

interface ImageProps {
  interval: number;
  isActive: boolean;
}

interface ImageState {
  url: string;
  imageNumber: number;
}

export class ImageRandom extends React.Component<ImageProps, ImageState> {
  intervalID?: NodeJS.Timeout;
  _isMounted: boolean;

  constructor(props: ImageProps) {
    super(props);
    this.state = {
      url: "",
      imageNumber: 0,
    };
    this._isMounted = false;
    this.setNewImage = this.setNewImage.bind(this);
  }

  setNewImage() {
    if (this._isMounted) {
      const newId = Math.floor(Math.random() * 200);
      this.setState((state: ImageState) => ({
        url: getUrl(newId),
        imageNumber: state.imageNumber + 1,
      }));
    }
  }

  clearWorker() {
    if (this.intervalID) {
      clearInterval(this.intervalID);
      this.intervalID = undefined;
    }
  }

  componentDidMount() {
    this._isMounted = true;
    const { interval, isActive } = this.props;
    if (isActive) {
      this.intervalID = setInterval(this.setNewImage, interval);
      this.setNewImage();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
    this.clearWorker();
  }

  componentDidUpdate(prevProps: ImageProps) {
    const didPropsChanged =
      prevProps.interval !== this.props.interval ||
      this.props.isActive !== prevProps.isActive;
    if (didPropsChanged) {
      this.clearWorker();
      if (this.props.isActive) {
        this.intervalID = setInterval(this.setNewImage, this.props.interval);
      }
    }
  }

  render() {
    const { url, imageNumber } = this.state;
    return (
      <div>
        <img src={url} alt="Main" style={{ marginTop: 16 }} />
        <h4>Image nubmer: {imageNumber}</h4>
      </div>
    );
  }
}
