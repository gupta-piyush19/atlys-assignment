import { EMOJIS } from "./constants";

export const getRandomEmoji = (): string => {
  return EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
};
