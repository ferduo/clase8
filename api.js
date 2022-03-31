const express = require('express');
const { id } = require('./clase-Contenedor');

const Contenedor = require('./clase-Contenedor');
const path = './productos.txt';
const productos = new Contenedor(path);

const api = express.Router();
module.exports = api

api.use(function (req, res, next) {
    if (req.originalUrl === '/api/productos/:id') {
        if (req.method === 'POST') {
            req.method = 'PUT'
        }
    }
    next()
})

api.get('/api/productos', (_, res) => {
    productos.getAll().then((result) => { res.send(result) })
})

api.get('/api/productos/:id', (req, res) => {
    const { id } = req.params
    productos.getById(Number(id))
        .then((result) => { res.send(result || { error: "producto no encontrado" }) })
})

api.post('/api/productos', (req, res) => {
    const nuevoProd = req.body
    productos.save(nuevoProd)
    res.send({ Productos: 'Guardado' })
})

api.put('/api/productos/:id', (req, res) => {
    productos.modifyById(req.body)
    res.send({ obj: 'Producto modificado' })
})

api.delete('/api/productos/:id', (req, res) => {
    const { id } = req.params
    productos.deleteById(Number(id))
    res.send('' || { error: 'producto no encontrado' })
})