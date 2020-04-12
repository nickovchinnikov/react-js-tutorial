import React from "react";

type FieldComponentInterface = React.FC<{
  /**
   * Field state
   */
  field: string[][];
  /**
   * Cell interaction callback
   */
  onClick: (x: number, y: number) => void;
}>;

interface InteractiveFieldProps {
  /**
   * x-size for field
   */
  xSize: number;
  /**
   * y-size for field
   */
  ySize: number;
  /**
   * list of player's markers
   */
  playerMarks: string[];
  /**
   * Component to render game field
   */
  fieldComponent: FieldComponentInterface;
}

interface InteractiveFieldState {
  /**
   * Current move number
   */
  moveNumber: number;
  /**
   * Current game state
   */
  fieldState: string[][];
}

class InteractiveField extends React.Component<
  InteractiveFieldProps,
  InteractiveFieldState
> {
  private playerMarks: string[];
  private FieldComponent: FieldComponentInterface;

  constructor(props: InteractiveFieldProps) {
    super(props);
    this.playerMarks = props.playerMarks;
    this.FieldComponent = props.fieldComponent;
    this.state = {
      fieldState: Array.from({ length: props.ySize }).map(() =>
        Array.from({ length: props.xSize }).fill("")
      ) as string[][],
      moveNumber: 0,
    };
    this.onClick = this.onClick.bind(this);
  }

  public onClick(x: number, y: number) {
    const isXValid = x >= 0 && x < this.state.fieldState[0].length;
    const isYValid = y >= 0 && y < this.state.fieldState.length;
    const areCoordinatesValid = isXValid && isYValid;
    if (!areCoordinatesValid) {
      return;
    }

    this.setState((state) => {
      const fieldStateCopy = state.fieldState.map((row) => [...row]);
      fieldStateCopy[y][x] = this.getPlayerMark();

      return {
        fieldState: fieldStateCopy,
        moveNumber: state.moveNumber + 1,
      };
    });
  }

  private getPlayerMark() {
    return this.playerMarks[this.state.moveNumber % this.playerMarks.length];
  }

  render() {
    const FieldComponent = this.FieldComponent;
    return (
      <FieldComponent field={this.state.fieldState} onClick={this.onClick} />
    );
  }
}

export default InteractiveField;
