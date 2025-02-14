import express from 'express';
import { cargarPaises, paisesEspanol, addPais , editarPaises,  renderPaisEditar, eliminarPais, Middleware} from '../controllers/paisesApiController.mjs';


const routerApi = express.Router();

//cargar todos los países desde la API
routerApi.get('/cargar-paises', cargarPaises); 
//filtrar los resultados en paises que hablen español
routerApi.get('/paises-espaniol', paisesEspanol);
//agregar un nuevo país
routerApi.get('/agregar-pais', (req, res)=>{
    res.render('agregarPais') 
});
routerApi.post('/agregar-pais', Middleware, addPais);

//cargar el formulario de edición
routerApi.get('/editar-pais/:id', renderPaisEditar);
//editar un país formulario
routerApi.post('/editar-pais/:id',Middleware, editarPaises);
//elimina el pais
routerApi.delete('/eliminar-pais/:id', eliminarPais);


export default routerApi;