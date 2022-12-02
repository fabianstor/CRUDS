"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller = __importStar(require("../controller/controller"));
const path = (0, express_1.Router)();
path.get('/personas', controller.showPerson);
path.get('/productos', controller.showProduct);
path.get('/empresas', controller.showEnterprise);
path.post('/personas', controller.addPerson);
path.post('/productos', controller.addProduct);
path.post('/empresas', controller.addEnterprise);
path.put('/personas', controller.updatePerson);
path.put('/productos', controller.updateProduct);
path.put('/empresas', controller.updateEnterprise);
path.delete('/personas', controller.deletePerson);
path.delete('/productos', controller.deleteProduct);
path.delete('/empresas', controller.deleteEnterprise);
exports.default = path;