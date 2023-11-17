const {response} = require('express');
const cliente = require('../models/cliente');

Cliente = require('../models/cliente')

const getCliente = async(req, res) => {
    const cliente =  await Cliente.find(); //OBTENER TODOS LOS DATOS DE LA COLLECCION
    res.json({
        msg:cliente
    })
}

const postCliente = async(req, res) => {
    const datos = req.query//CAPTURAR DATOS DE LA URL-POSTMAN

    let mensaje = 'Insercción exitosa'

    try {
        const cliente = new Cliente(datos)
        cliente.save()
        console.log(cliente)
        
    } catch (error) {
        mensaje= error
        console.log(error)
    }

    res.json({
        msg:mensaje
    })
}

const putCliente = async(req, res) => {
    const {documentoCliente, nombreCliente, telefonoCliente, correoCliente, direccionCliente, estadoCliente} = req.query //DESESTRUCTURAR
    let mensaje = ''
    try {
        const cliente = await Cliente.findOneAndUpdate({documentoCliente: documentoCliente},
            {nombreCliente:nombreCliente, telefonoCliente:telefonoCliente,correoCliente:correoCliente,
                direccionCliente:direccionCliente,estadoCliente:estadoCliente})
            mensaje = 'Actualizacion existosa'
        
    } catch (error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })  
}

const deleteCliente = async(req, res) => {
    const {nombreCliente} = req.query //DESESTRUCTURAR
    let mensaje = ''
    try {
        const cliente = await Cliente.findOneAndDelete({nombreCliente: nombreCliente})
            mensaje = 'Eliminación existosa'
        
    } catch (error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })  
}



module.exports = {
    getCliente,
    postCliente,
    putCliente,
    deleteCliente
}