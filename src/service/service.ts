import { Client } from "../database/database"

export const insertPerson = async (nombre: string, edad: number) => {
    await Client.query(`insert into personas (nombre, edad) values ('${nombre}', ${edad})`)
}

export const insertProduct = async (descripcion: string, categoria: string) => {
    await Client.query(`insert into productos (descripcion, categoria) values ('${descripcion}', '${categoria}')`)
}

export const insertEnterprise = async (nombre: string, nit: string) => {
    await Client.query(`insert into empresas (nombre, nit) values ('${nombre}', '${nit}')`)
}

export const selectPerson = async () => {
    return (await (Client.query(`select * from personas p`))).rows
}

export const selectProducts = async () => {
    return (await (Client.query(`select * from productos p`))).rows
}

export const selectEnterprise = async () => {
    return (await (Client.query(`select * from empresas e`))).rows
}

export const deletePerson =async (id: number) => {
    await Client.query(`delete from personas where id = ${id}`)
}

export const deleteProduct =async (id: number) => {
    await Client.query(`delete from productos where id = ${id}`)
}

export const deleteEnterprise =async (id: number) => {
    await Client.query(`delete from empresas  where id = ${id}`)
}

export const updatePerson  =async (id: number, nombre: string, edad: number) => {
    await Client.query(`update personas  set nombre = '${nombre}', edad = ${edad} where id = ${id}`)
}

export const updateProduct  =async (id: number, descripcion: string, categoria: string) => {
    await Client.query(`update productos set descripcion = '${descripcion}', categoria = '${categoria}' where id = ${id}`)
}

export const updateEnterprise  =async (id: number, nombre: string, nit: string) => {
    await Client.query(`update empresas  set nombre = '${nombre}', nit = '${nit}' where id = ${id}`)
}