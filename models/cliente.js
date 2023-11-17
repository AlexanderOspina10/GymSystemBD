const {Schema, model} = require('mongoose')

const ClienteSchema = ({

    documentoCliente: {
        type:Number,
        unique:true,
        required:[true, 'El documento es requerido'],
        //min:[5, 'El documento debe contener minimo 5 caracteres'],
        //max:[15, 'El documento debe contener maximo 15 caracteres']
    },
    
    nombreCliente:{
        type: String,
        unique:true,
        required:[true, 'El nombre de cliente es requerido']
    },

    telefonoCliente: {
        type:Number,
        unique:true,
        required:[true, 'El telefono es requerido'],
        //min:[10, 'El telefono debe contener minimo 10 caracteres'],
        //max:[12, 'El telefono debe contener maximo 12 caracteres']
    },

    correoCliente:{
        type: String,
        required:[true, 'El correo del cliente es requerido'],
        match:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        min:10,
        trim:true,
        lowercase:true,
        unique:true
    },

    

    direccionCliente:{
        type: String,
        required:[true, 'La dirección del cliente es requerida'],
        min:5,
        trim:true,
    },

    estadoCliente: {
        type:Boolean,
        default:true,
    }

})

module.exports = model('Cliente', ClienteSchema)