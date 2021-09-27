export interface StoriesPropType {
  collection: number[];
}

export type ModelResponseType = {
  title: string;
  by: string;
  id: number;
  url: string;
  kids?: number[];
  time: number;
};
