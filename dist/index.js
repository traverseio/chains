"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChainByID = exports.getChainByName = void 0;
var chain_1 = require("./chain");
var NETWORKS = {
    ETHEREUM: new chain_1.Network(1, "ethereum", "eth"),
    BITCOIN: new chain_1.Network(2, "bitcoin", "btc"),
};
var CHAINS = Object.freeze([
    new chain_1.Chain(NETWORKS.ETHEREUM, 1, "mainnet", true),
    new chain_1.Chain(NETWORKS.ETHEREUM, 5, "goerli", false),
    new chain_1.Chain(NETWORKS.BITCOIN, 1, "mainnet", true),
    new chain_1.Chain(NETWORKS.BITCOIN, 2, "testnet", false),
]);
function getChainByName(networkName, chainName) {
    var result = CHAINS.find(function (chain) {
        return chain.getNetwork().getName() === networkName &&
            chain.getName() === chainName;
    });
    if (!result)
        throw new Error("Unsupported chain: networkName=".concat(networkName, " chainName=").concat(chainName));
    return result;
}
exports.getChainByName = getChainByName;
function getChainByID(networkID, chainID) {
    var result = CHAINS.find(function (chain) {
        return chain.getNetwork().getID() === networkID && chain.getID() === chainID;
    });
    if (!result)
        throw new Error("Unsupported chain: networkID=".concat(networkID, " chainID=").concat(chainID));
    return result;
}
exports.getChainByID = getChainByID;
//# sourceMappingURL=index.js.map