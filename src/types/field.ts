export interface CellProps {
  // is cell filled flag
  children?: string;
  // onClick handler to fire events about interactions
  onClick: (x: number, y: number) => void;
  // x-coordinate to inform which cell is clicked
  x?: number;
  // y-coordinate to inform which cell is clicked
  y?: number;
}

export interface FieldProps {
  // array representing field state
  field: string[][];
  // calback to fire event on field interaction
  onClick: (x: number, y: number) => void;
}
