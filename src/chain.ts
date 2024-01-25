export class Network {
  static usedIDs: number[] = [];

  private id: number;
  private name: string;
  private feeTokenSymbol: string;

  constructor(id: number, name: string, feeTokenSymbol: string) {
    if (Network.usedIDs.includes(id))
      throw new Error("Duplicate network ID used: IDs must be unique");
    Network.usedIDs.push(id);

    this.id = id;
    this.name = name;
    this.feeTokenSymbol = feeTokenSymbol;
  }

  public getID(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getFeeTokenSymbol(): string {
    return this.feeTokenSymbol;
  }
}

export class Chain {
  static usedIDs: { networkID: number; chainID: number }[] = [];

  private network: Network;
  private id: number;
  private name: string;
  private mainnet: boolean;

  constructor(network: Network, id: number, name: string, isMainnet: boolean) {
    if (
      Chain.usedIDs.find(
        (val) => val.networkID === network.getID() && val.chainID === id
      )
    )
      throw new Error(
        "Duplicate chain ID used for given network: IDs must be unique"
      );
    Chain.usedIDs.push({ networkID: network.getID(), chainID: id });

    this.network = network;
    this.id = id;
    this.name = name;
    this.mainnet = isMainnet;
  }

  public getNetwork(): Network {
    return this.network;
  }

  public getID(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public isMainnet(): boolean {
    return this.mainnet;
  }
}
