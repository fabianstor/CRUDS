"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEnterprise = exports.updateProduct = exports.updatePerson = exports.deleteEnterprise = exports.deleteProduct = exports.deletePerson = exports.selectEnterprise = exports.selectProducts = exports.selectPerson = exports.insertEnterprise = exports.insertProduct = exports.insertPerson = void 0;
const database_1 = require("../database/database");
const insertPerson = (nombre, edad) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.Client.query(`insert into personas (nombre, edad) values ('${nombre}', ${edad})`);
});
exports.insertPerson = insertPerson;
const insertProduct = (descripcion, categoria) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.Client.query(`insert into productos (descripcion, categoria) values ('${descripcion}', '${categoria}')`);
});
exports.insertProduct = insertProduct;
const insertEnterprise = (nombre, nit) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.Client.query(`insert into empresas (nombre, nit) values ('${nombre}', '${nit}')`);
});
exports.insertEnterprise = insertEnterprise;
const selectPerson = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield (database_1.Client.query(`select * from personas p`))).rows;
});
exports.selectPerson = selectPerson;
const selectProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield (database_1.Client.query(`select * from productos p`))).rows;
});
exports.selectProducts = selectProducts;
const selectEnterprise = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield (database_1.Client.query(`select * from empresas e`))).rows;
});
exports.selectEnterprise = selectEnterprise;
const deletePerson = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.Client.query(`delete from personas where id = ${id}`);
});
exports.deletePerson = deletePerson;
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.Client.query(`delete from productos where id = ${id}`);
});
exports.deleteProduct = deleteProduct;
const deleteEnterprise = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.Client.query(`delete from empresas  where id = ${id}`);
});
exports.deleteEnterprise = deleteEnterprise;
const updatePerson = (id, nombre, edad) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.Client.query(`update personas  set nombre = '${nombre}', edad = ${edad} where id = ${id}`);
});
exports.updatePerson = updatePerson;
const updateProduct = (id, descripcion, categoria) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.Client.query(`update productos set descripcion = '${descripcion}', categoria = '${categoria}' where id = ${id}`);
});
exports.updateProduct = updateProduct;
const updateEnterprise = (id, nombre, nit) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.Client.query(`update empresas  set nombre = '${nombre}', nit = '${nit}' where id = ${id}`);
});
exports.updateEnterprise = updateEnterprise;
