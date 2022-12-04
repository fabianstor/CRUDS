import { request, Request, Response } from "express"
import * as service from '../service/service'

export const addPerson = async (Request: Request, Response: Response) => {
    try {
        const {nombre, edad} = Request.body
        await service.insertPerson(nombre, edad)
        Response.send({respuesta: "La persona ha sido registrada correctamente"}).status(201)
    } catch (error) {
        console.log("Error en addPerson", error)
        Response.send({respuesta: "Error al guardar persona"}).status(400)
    }
}

export const addProduct = async (Request: Request, Response: Response) => {
    try {
        const { descripcion, categoria } = Request.body
        await service.insertProduct(descripcion, categoria)
        Response.send({respuesta: "El producto ha sido registrado correctamente"}).status(201)
    } catch (error) {
        console.log("Error en addProducts", error)
        Response.send({respuesta: "Error al guardar producto"}).status(400)
    }
}

export const addEnterprise = async (Request: Request, Response: Response) => {
    try {
        const {nombre, nit} = Request.body
        await service.insertEnterprise(nombre, nit)
        Response.send({respuesta: "La empresa ha sido registrado correctamente"}).status(201)
    } catch (error) {
        console.log("Error en addEmpresas", error)
        Response.send({respuesta: "Error al guardar empresa"}).status(400)
    }
}

export const showPerson =async (_Request: Request, Response: Response) => {
    try {
        const persons = await service.selectPerson()
        Response.send({respuesta: "Personas obtenidas con exito", personas: persons}).status(200)
    } catch (error) {
        console.log("Error en showPerson", error)
        Response.send({respuesta: "Error al mostrar personas"}).status(400)
    }
}

export const showProduct =async (_Request: Request, Response: Response) => {
    try {
        const products = await service.selectProducts()
        Response.send({respuesta: "Productos obtenidos con exito", productos: products}).status(200)
    } catch (error) {
        console.log("Error en showProduct", error)
        Response.send({respuesta: "Error al mostrar productos"}).status(400)
    }
}

export const showEnterprise =async (_Request: Request, Response: Response) => {
    try {
        const enterprise = await service.selectEnterprise()
        Response.send({respuesta: "Empresas obtenidos con exito", empresas: enterprise}).status(200)
    } catch (error) {
        console.log("Error en showEnterprise", error)
        Response.send({respuesta: "Error al mostrar empresas"}).status(400)
    }
}

export const deletePerson =async (Request: Request, Response: Response) => {
    try {
        const id  = Request.params.id
        await service.deletePerson(+id)
        Response.send({respuesta: "Persona eliminada con exito"}).status(200)
    } catch (error) {
        console.log("Error deletePerson", error)
    }
}
export const deleteProduct =async (Request: Request, Response: Response) => {
    try {
        const  id  = Request.params.id
        console.log(Request.body)
        await service.deleteProduct(+id)
        Response.send({respuesta: "Producto eliminado con exito"}).status(200)
    } catch (error) {
        console.log("Error deleteProduct", error)
    }
}

export const deleteEnterprise =async (Request: Request, Response: Response) => {
    try {
        const  id  = Request.params.id
        await service.deleteEnterprise(+id)
        Response.send({respuesta: "Empresa eliminada con exito"}).status(200)
    } catch (error) {
        console.log("Error deleteEnterprise", error)
    }
}

export const updatePerson =async (Request: Request, Response: Response) => {
    try {
        const { id, nombre, edad } = Request.body
        await service.updatePerson(id, nombre, edad)
        Response.send({respuesta: "Persona actualizada con exito"}).status(200)
    } catch (error) {
        console.log("Error updatePerson", error)
    }
}

export const updateProduct =async (Request: Request, Response: Response) => {
    try {
        const { id, descripcion, categoria } = Request.body
        await service.updateProduct(id, descripcion, categoria)
        Response.send({respuesta: "Producto actualizado con exito"}).status(200)
    } catch (error) {
        console.log("Error updateProduct", error)
    }
}

export const updateEnterprise =async (Request: Request, Response: Response) => {
    try {
        const { id, nombre, nit } = Request.body
        await service.updateEnterprise(id, nombre, nit)
        Response.send({respuesta: "Empresa actualizada con exito"}).status(200)
    } catch (error) {
        console.log("Error updateEnterprise", error)
    }
}


