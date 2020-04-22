import React from "react";

interface ImageProps {
  id: number;
}

interface ImageState {
  url: string;
}

export class ImageLocal extends React.Component<ImageProps, ImageState> {
  constructor(props: ImageProps) {
    super(props);
    this.state = {
      url: "",
    };
  }

  static getDerivedStateFromProps(props: ImageProps) {
    return {
      url: `https://picsum.photos/id/${props.id}/200`,
    };
  }

  render() {
    const { url } = this.state;
    return <img src={url} alt="Main" />;
  }
}
