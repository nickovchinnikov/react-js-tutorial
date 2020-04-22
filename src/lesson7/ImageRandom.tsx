import React from "react";

const getUrl = (id: number): string => {
  const goodId = Math.min(1000, Math.max(1, id));
  return `https://picsum.photos/id/${goodId}/200`;
};

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
  constructor(props: ImageProps) {
    super(props);
    this.state = {
      url: "",
      imageNumber: 0,
    };
    this.setNewImage = this.setNewImage.bind(this);
  }

  setNewImage() {
    const newId = Math.floor(Math.random() * 200);
    this.setState((state: ImageState) => ({
      url: getUrl(newId),
      imageNumber: state.imageNumber + 1,
    }));
  }

  clearWorker() {
    if (this.intervalID) {
      clearInterval(this.intervalID);
      this.intervalID = undefined;
    }
  }

  componentDidMount() {
    const { interval, isActive } = this.props;
    if (isActive) {
      this.intervalID = setInterval(this.setNewImage, interval);
      this.setNewImage();
    }
  }

  componentWillUnmount() {
    this.clearWorker();
  }

  componentDidUpdate(prevProps: ImageProps) {
    if (
      prevProps.interval !== this.props.interval ||
      this.props.isActive !== prevProps.isActive
    ) {
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
