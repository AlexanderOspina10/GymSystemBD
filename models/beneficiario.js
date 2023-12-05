const {Schema, model} = require('mongoose')

const BeneficiarioSchema = ({

    documentoBeneficiario: {
        type:Number,
        unique:true,
        required:[true, 'El documento es requerido'],
        //min:[5, 'El documento debe contener minimo 5 caracteres'],
        //max:[15, 'El documento debe contener maximo 15 caracteres']
    },
    
    nombreBeneficiario:{
        type: String,
        unique:[true, 'El nombre ingresado ya existe en el sistema'],
        required:[true, 'El nombre de beneficiario es requerido']
    },

    telefonoBeneficiario: {
        type:Number,
        unique:true,
        required:[true, 'El telefono es requerido'],
        //min:[10, 'El telefono debe contener minimo 10 caracteres'],
        //max:[12, 'El telefono debe contener maximo 12 caracteres']
    },

    correoBeneficiario:{
        type: String,
        required:[true, 'El correo del beneficiario es requerido'],
        match:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        min:10,
        trim:true,
        lowercase:true,
        unique:true
    },

    

    direccionBeneficiario:{
        type: String,
        required:[true, 'La dirección del beneficiario es requerida'],
        min:5,
        trim:true,
    },


    estadoBeneficiario: {
        type:Boolean,
        default:true,
    }

})

module.exports = model('Beneficiario', BeneficiarioSchema)