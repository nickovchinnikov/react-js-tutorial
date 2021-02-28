import React from "react";
import { getUrl } from "./utils";

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
      url: getUrl(props.id),
    };
  }

  render() {
    const { url } = this.state;
    return <img src={url} alt="Main" />;
  }
}
