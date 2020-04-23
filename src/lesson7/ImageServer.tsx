import React from "react";
import { getAsyncUrl } from "./utils";

interface ImageProps {
  id: number;
}

interface ImageState {
  url: string;
}

export class ImageServer extends React.Component<ImageProps, ImageState> {
  _isMounted: boolean;

  constructor(props: ImageProps) {
    super(props);
    this.state = {
      url: "",
    };
    this._isMounted = false;
  }

  setImage() {
    getAsyncUrl(this.props.id).then((url) => {
      if (this._isMounted) {
        this.setState({ url });
      }
    });
  }

  componentDidMount() {
    this._isMounted = true;
    this.setImage();
  }

  componentDidUpdate(prevProps: ImageProps) {
    if (prevProps.id !== this.props.id) {
      this.setImage();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  shouldComponentUpdate(nextProps: ImageProps, nextState: ImageState) {
    return this.state.url !== nextState.url || nextProps.id !== this.props.id;
  }

  render() {
    const { url } = this.state;
    return <img src={url} alt="Main" />;
  }
}
