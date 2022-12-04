import { Router } from "express"
import * as controller from '../controller/controller'
const path = Router()

path.get('/personas', controller.showPerson)
path.get('/productos', controller.showProduct)
path.get('/empresas', controller.showEnterprise)

path.post('/personas', controller.addPerson)
path.post('/productos', controller.addProduct)
path.post('/empresas', controller.addEnterprise)

path.put('/personas', controller.updatePerson)
path.put('/productos', controller.updateProduct)
path.put('/empresas', controller.updateEnterprise)

path.delete('/personas/:id', controller.deletePerson)
path.delete('/productos/:id', controller.deleteProduct)
path.delete('/empresas/:id', controller.deleteEnterprise)

export default path