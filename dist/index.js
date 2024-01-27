"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChainByID = exports.getChainByName = exports.getNetworks = void 0;
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
function getNetworks() {
    return NETWORKS;
}
exports.getNetworks = getNetworks;
function getChainByName(networkName, chainName) {
    return CHAINS.find(function (chain) {
        return chain.getNetwork().getName() === networkName &&
            chain.getName() === chainName;
    });
}
exports.getChainByName = getChainByName;
function getChainByID(networkID, chainID) {
    return CHAINS.find(function (chain) {
        return chain.getNetwork().getID() === networkID && chain.getID() === chainID;
    });
}
exports.getChainByID = getChainByID;
//# sourceMappingURL=index.js.map