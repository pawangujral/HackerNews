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

export interface ErrorType {
  msge: string;
  status: boolean;
}

export interface toastType {
  message: string;
  variant?: 'default' | 'success' | 'warning' | 'error';
}

export interface toastMessagesType {
  toasts: toastType[];
}

export interface toastProviderType extends toastMessagesType {
  addToast: (toast: toastType) => void;
}
