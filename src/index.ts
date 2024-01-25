import { Chain, Network } from "./chain";

const NETWORKS = {
  ETHEREUM: new Network(1, "ethereum", "eth"),
  BITCOIN: new Network(2, "bitcoin", "btc"),
};

export const SUPPORTED_CHAINS = Object.freeze({
  ETHEREUM: {
    MAINNET: new Chain(NETWORKS.ETHEREUM, 1, "mainnet", true),
    GOERLI: new Chain(NETWORKS.ETHEREUM, 5, "goerli", false),
  },
  BITCOIN: {
    MAINNET: new Chain(NETWORKS.BITCOIN, 1, "mainnet", true),
    TESTNET: new Chain(NETWORKS.BITCOIN, 2, "testnet", false),
  },
});
