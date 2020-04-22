import React from "react";

const getUrl = async (id: number): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const goodId = Math.min(1000, Math.max(1, id));
      resolve(`https://picsum.photos/id/${goodId}/200`);
    }, 0);
  });
};

interface ImageProps {
  id: number;
}

interface ImageState {
  url: string;
}

export class ImageServer extends React.Component<ImageProps, ImageState> {
  constructor(props: ImageProps) {
    super(props);
    this.state = {
      url: "",
    };
  }

  componentDidMount() {
    getUrl(this.props.id).then((url) => {
      this.setState({ url });
    });
  }

  componentDidUpdate(prevProps: ImageProps) {
    if (prevProps.id !== this.props.id) {
      getUrl(this.props.id).then((url) => {
        this.setState({ url });
      });
    }
  }

  shouldComponentUpdate(nextProps: ImageProps, nextState: ImageState) {
    return this.state.url !== nextState.url || nextProps.id !== this.props.id;
  }

  render() {
    const { url } = this.state;
    return <img src={url} alt="Main" />;
  }
}
