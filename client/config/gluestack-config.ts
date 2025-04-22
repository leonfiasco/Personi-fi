import { config } from "@gluestack-ui/config";

export const customGluestackConfig = {
  ...config,
  tokens: {
    ...config.tokens,
    colors: {
      ...config.tokens.colors,
      background: "#F7F7F6",
      cardBg: "#262727",
      futuristicAccent: "#B2DF01",
      oliveGreen: "#6B8E23",
    },
  },
};
