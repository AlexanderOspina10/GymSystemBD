const {response} = require('express');
const cliente = require('../models/cliente');

Cliente = require('../models/cliente')

const getCliente = async(req, res) => {
    const cliente =  await Cliente.find(); //OBTENER TODOS LOS DATOS DE LA COLLECCION
    res.json({
        msg:cliente
    })
}

// const postCliente = async(req, res) => {
//     const datos = req.query//CAPTURAR DATOS DE LA URL-POSTMAN LOCALMENTE

const postCliente = async(req, res) => {
        const datos = req.body//CAPTURAR DATOS DE LA URL-POSTMAN EN LA AWEB


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
    const {documentoCliente, nombreCliente, telefonoCliente, correoCliente, direccionCliente, estadoCliente} = req.body //DESESTRUCTURAR
    let mensaje = ''
    try {
        const cliente = await Cliente.findOne({ documentoCliente });
        if(cliente){
            const cliente = await Cliente.findOneAndUpdate({documentoCliente: documentoCliente},
                {nombreCliente:nombreCliente, telefonoCliente:telefonoCliente,correoCliente:correoCliente,
                    direccionCliente:direccionCliente,estadoCliente:estadoCliente})
                mensaje = 'Actualizacion existosa'
        }else{
            mensaje = 'Cliente no encontrado'
        }
        
        
    } catch (error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })  
}

const deleteCliente = async (req, res) => { 
    const { documentoCliente } = req.body; // DESESTRUCTURAR
    let mensaje = '';

    try {
        const cliente = await Cliente.findOne({ documentoCliente });

        if (cliente) {
            // Si el cliente existe, procede a eliminarlo
            await Cliente.findOneAndDelete({ documentoCliente });
            mensaje = 'Eliminación exitosa';
        } else {
            mensaje = 'Cliente no encontrado';
        }
    } catch (error) {
        mensaje = error.message || 'Error al eliminar el cliente';
    }

    res.json({
        msg: mensaje,
    });
};


module.exports = {
    getCliente,
    postCliente,
    putCliente,
    deleteCliente
}