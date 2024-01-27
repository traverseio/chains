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

export function getChainByName(networkName: string, chainName: string): Chain {
  const result = CHAINS.find(
    (chain) =>
      chain.getNetwork().getName() === networkName &&
      chain.getName() === chainName
  );

  if (!result)
    throw new Error(
      `Unsupported chain: networkName=${networkName} chainName=${chainName}`
    );

  return result;
}

export function getChainByID(networkID: number, chainID: number): Chain {
  const result = CHAINS.find(
    (chain) =>
      chain.getNetwork().getID() === networkID && chain.getID() === chainID
  );

  if (!result)
    throw new Error(
      `Unsupported chain: networkID=${networkID} chainID=${chainID}`
    );

  return result;
}
