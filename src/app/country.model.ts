export interface Country {
  code: string;
  name: string;
  currency: string;
  continent: {
    name: string;
  };
  languages?: { name: string }[];
  phone?: string;
  native?: string;
  emoji?: string;
  emojiU?: string;
}
