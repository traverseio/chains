export declare class Network {
    static usedIDs: number[];
    private id;
    private name;
    private feeTokenSymbol;
    constructor(id: number, name: string, feeTokenSymbol: string);
    getID(): number;
    getName(): string;
    getFeeTokenSymbol(): string;
}
export declare class Chain {
    static usedIDs: {
        networkID: number;
        chainID: number;
    }[];
    private network;
    private id;
    private name;
    private mainnet;
    constructor(network: Network, id: number, name: string, isMainnet: boolean);
    getNetwork(): Network;
    getNetworkID(): number;
    getID(): number;
    getName(): string;
    isMainnet(): boolean;
}
