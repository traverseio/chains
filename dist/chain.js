"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chain = exports.Network = void 0;
var Network = /** @class */ (function () {
    function Network(id, name, feeTokenSymbol) {
        if (Network.usedIDs.includes(id))
            throw new Error("Duplicate network ID used: IDs must be unique");
        Network.usedIDs.push(id);
        this.id = id;
        this.name = name;
        this.feeTokenSymbol = feeTokenSymbol;
    }
    Network.prototype.getID = function () {
        return this.id;
    };
    Network.prototype.getName = function () {
        return this.name;
    };
    Network.prototype.getFeeTokenSymbol = function () {
        return this.feeTokenSymbol;
    };
    Network.usedIDs = [];
    return Network;
}());
exports.Network = Network;
var Chain = /** @class */ (function () {
    function Chain(network, id, name, isMainnet) {
        if (Chain.usedIDs.find(function (val) { return val.networkID === network.getID() && val.chainID === id; }))
            throw new Error("Duplicate chain ID used for given network: IDs must be unique");
        Chain.usedIDs.push({ networkID: network.getID(), chainID: id });
        this.network = network;
        this.id = id;
        this.name = name;
        this.mainnet = isMainnet;
    }
    Chain.prototype.getNetwork = function () {
        return this.network;
    };
    Chain.prototype.getID = function () {
        return this.id;
    };
    Chain.prototype.getName = function () {
        return this.name;
    };
    Chain.prototype.isMainnet = function () {
        return this.mainnet;
    };
    Chain.usedIDs = [];
    return Chain;
}());
exports.Chain = Chain;
//# sourceMappingURL=chain.js.map