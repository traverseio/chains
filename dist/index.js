"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUPPORTED_CHAINS = void 0;
var chain_1 = require("./chain");
var NETWORKS = {
    ETHEREUM: new chain_1.Network(1, "ethereum", "eth"),
    BITCOIN: new chain_1.Network(2, "bitcoin", "btc"),
};
exports.SUPPORTED_CHAINS = Object.freeze({
    ETHEREUM: {
        MAINNET: new chain_1.Chain(NETWORKS.ETHEREUM, 1, "mainnet", true),
        GOERLI: new chain_1.Chain(NETWORKS.ETHEREUM, 5, "goerli", false),
    },
    BITCOIN: {
        MAINNET: new chain_1.Chain(NETWORKS.BITCOIN, 1, "mainnet", true),
        TESTNET: new chain_1.Chain(NETWORKS.BITCOIN, 2, "testnet", false),
    },
});
//# sourceMappingURL=index.js.map