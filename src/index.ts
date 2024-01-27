import { Chain, Network } from "./chain";

const NETWORKS = {
  ETHEREUM: new Network(1, "ethereum", "eth"),
  BITCOIN: new Network(2, "bitcoin", "btc"),
};

const CHAINS = Object.freeze([
  new Chain(NETWORKS.ETHEREUM, 1, "mainnet", true),
  new Chain(NETWORKS.ETHEREUM, 5, "goerli", false),
  new Chain(NETWORKS.BITCOIN, 1, "mainnet", true),
  new Chain(NETWORKS.BITCOIN, 2, "testnet", false),
]);

export function getChainByName(
  networkName: string,
  chainName: string
): Chain | undefined {
  return CHAINS.find(
    (chain) =>
      chain.getNetwork().getName() === networkName &&
      chain.getName() === chainName
  );
}

export function getChainByID(
  networkID: number,
  chainID: number
): Chain | undefined {
  return CHAINS.find(
    (chain) =>
      chain.getNetwork().getID() === networkID && chain.getID() === chainID
  );
}
