import { Chain, Network } from "./chain";
export declare function getNetworks(): {
    ETHEREUM: Network;
    BITCOIN: Network;
};
export declare function getChainByName(networkName: string, chainName: string): Chain | undefined;
export declare function getChainByID(networkID: number, chainID: number): Chain | undefined;
