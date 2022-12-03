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
exports.updateEnterprise = exports.updateProduct = exports.updatePerson = exports.deleteEnterprise = exports.deleteProduct = exports.deletePerson = exports.showEnterprise = exports.showProduct = exports.showPerson = exports.addEnterprise = exports.addProduct = exports.addPerson = void 0;
const service = __importStar(require("../service/service"));
const addPerson = (Request, Response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, edad } = Request.body;
        yield service.insertPerson(nombre, edad);
        Response.send({ respuesta: "La persona ha sido registrada correctamente" }).status(201);
    }
    catch (error) {
        console.log("Error en addPerson", error);
        Response.send({ respuesta: "Error al guardar persona" }).status(400);
    }
});
exports.addPerson = addPerson;
const addProduct = (Request, Response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { descripcion, categoria } = Request.body;
        yield service.insertProduct(descripcion, categoria);
        Response.send({ respuesta: "El producto ha sido registrado correctamente" }).status(201);
    }
    catch (error) {
        console.log("Error en addProducts", error);
        Response.send({ respuesta: "Error al guardar producto" }).status(400);
    }
});
exports.addProduct = addProduct;
const addEnterprise = (Request, Response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, nit } = Request.body;
        yield service.insertEnterprise(nombre, nit);
        Response.send({ respuesta: "La empresa ha sido registrado correctamente" }).status(201);
    }
    catch (error) {
        console.log("Error en addEmpresas", error);
        Response.send({ respuesta: "Error al guardar empresa" }).status(400);
    }
});
exports.addEnterprise = addEnterprise;
const showPerson = (_Request, Response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const persons = yield service.selectPerson();
        Response.send({ respuesta: "Personas obtenidas con exito", personas: persons }).status(200);
    }
    catch (error) {
        console.log("Error en showPerson", error);
        Response.send({ respuesta: "Error al mostrar personas" }).status(400);
    }
});
exports.showPerson = showPerson;
const showProduct = (_Request, Response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield service.selectProducts();
        Response.send({ respuesta: "Productos obtenidos con exito", productos: products }).status(200);
    }
    catch (error) {
        console.log("Error en showProduct", error);
        Response.send({ respuesta: "Error al mostrar productos" }).status(400);
    }
});
exports.showProduct = showProduct;
const showEnterprise = (_Request, Response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const enterprise = yield service.selectEnterprise();
        Response.send({ respuesta: "Empresas obtenidos con exito", empresas: enterprise }).status(200);
    }
    catch (error) {
        console.log("Error en showEnterprise", error);
        Response.send({ respuesta: "Error al mostrar empresas" }).status(400);
    }
});
exports.showEnterprise = showEnterprise;
const deletePerson = (Request, Response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Request.params.id;
        yield service.deletePerson(+id);
        Response.send({ respuesta: "Persona eliminada con exito" }).status(200);
    }
    catch (error) {
        console.log("Error deletePerson", error);
    }
});
exports.deletePerson = deletePerson;
const deleteProduct = (Request, Response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Request.params.id;
        console.log(Request.body);
        yield service.deleteProduct(+id);
        Response.send({ respuesta: "Producto eliminado con exito" }).status(200);
    }
    catch (error) {
        console.log("Error deleteProduct", error);
    }
});
exports.deleteProduct = deleteProduct;
const deleteEnterprise = (Request, Response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Request.params.id;
        yield service.deleteEnterprise(+id);
        Response.send({ respuesta: "Empresa eliminada con exito" }).status(200);
    }
    catch (error) {
        console.log("Error deleteEnterprise", error);
    }
});
exports.deleteEnterprise = deleteEnterprise;
const updatePerson = (Request, Response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, nombre, edad } = Request.body;
        yield service.updatePerson(id, nombre, edad);
        Response.send({ respuesta: "Persona actualizada con exito" }).status(200);
    }
    catch (error) {
        console.log("Error updatePerson", error);
    }
});
exports.updatePerson = updatePerson;
const updateProduct = (Request, Response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, descripcion, categoria } = Request.body;
        yield service.updateProduct(id, descripcion, categoria);
        Response.send({ respuesta: "Producto actualizado con exito" }).status(200);
    }
    catch (error) {
        console.log("Error updateProduct", error);
    }
});
exports.updateProduct = updateProduct;
const updateEnterprise = (Request, Response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, nombre, nit } = Request.body;
        yield service.updateEnterprise(id, nombre, nit);
        Response.send({ respuesta: "Empresa actualizada con exito" }).status(200);
    }
    catch (error) {
        console.log("Error updateEnterprise", error);
    }
});
exports.updateEnterprise = updateEnterprise;
