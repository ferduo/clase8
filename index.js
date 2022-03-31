import { Router } from "express";
import { getProductos, getProducto, deleteProducto, addProducto, updateProducto} from './productos.js';

const router = Router();

router.get('/', (req, res) => {
    res.send('Test route')
});

router.get('/productos', (req, res) => {
    let productos = getProductos();
    res.send(productos);
});

router.get('/productos/:id', async (req, res) => {
    const id = req.params.id;
    let producto = getProducto(id);
    res.send(producto);
});

router.post('/productos', (req, res) => {
    console.log(req.body);
    let productoNuevo = addProducto(req.body);
    res.send(productoNuevo);
});

router.put('/productos/:id', (req, res) => {
    const id = req.params.id;
    let productoNuevo = req.body;
    let producto = updateProducto(id, productoNuevo);
    res.send(producto);
});

router.delete('/productos/:id',  (req, res) => {
    const id = req.params.id;
    let producto =  deleteProducto(id);
    res.send(producto);
});

export default router;