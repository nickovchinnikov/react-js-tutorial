export interface PlayerSettings {
  name: string;
  symbol: string;
  color: string;
}

export interface GameSettingsFormResult {
  player1: PlayerSettings;
  player2: PlayerSettings;
}

export interface GameSettingsFormProps {
  onSubmit: (settings: GameSettingsFormResult) => void;
}
