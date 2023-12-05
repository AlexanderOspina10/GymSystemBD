const {response} = require('express');
const beneficiario = require('../models/beneficiario');

Beneficiario = require('../models/beneficiario')

const getBeneficiario = async(req, res) => {
    const beneficiario =  await Beneficiario.find(); //OBTENER TODOS LOS DATOS DE LA COLLECCION
    res.json({
        msg:beneficiario
    })
}

// const postBeneficiario = async(req, res) => {
//     const datos = req.query//CAPTURAR DATOS DE LA URL-POSTMAN LOCALMENTE

const postBeneficiario = async(req, res) => {
        const datos = req.body//CAPTURAR DATOS DE LA URL-POSTMAN EN LA AWEB


    let mensaje = 'Insercción exitosa'

    try {
        const beneficiario = new Beneficiario(datos)
        beneficiario.save()
        console.log(beneficiario)
        
    } catch (error) {
        mensaje= error
        console.log(error)
    }

    res.json({
        msg:mensaje
    })
}

const putBeneficiario = async(req, res) => {
    const {documentoBeneficiario, nombreBeneficiario, telefonoBeneficiario, correoBeneficiario, direccionBeneficiario, estadoBeneficiario} = req.body //DESESTRUCTURAR
    let mensaje = ''
    try {
        const beneficiario = await Beneficiario.findOne({ documentoBeneficiario });
        if(beneficiario){
            const beneficiario = await Beneficiario.findOneAndUpdate({documentoBeneficiario: documentoBeneficiario},
                {nombreBeneficiario:nombreBeneficiario, telefonoBeneficiario:telefonoBeneficiario,correoBeneficiario:correoBeneficiario,
                    direccionBeneficiario:direccionBeneficiario,estadoBeneficiario:estadoBeneficiario})
                mensaje = 'Actualizacion existosa'
        }else{
            mensaje = 'Beneficiario no encontrado'
        }
        
        
    } catch (error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })  
}

const deleteBeneficiario = async (req, res) => { 
    const { documentoBeneficiario } = req.body; // DESESTRUCTURAR
    let mensaje = '';

    try {
        const beneficiario = await Beneficiario.findOne({ documentoBeneficiario });

        if (beneficiario) {
            // Si el beneficiario existe, procede a eliminarlo
            await Beneficiario.findOneAndDelete({ documentoBeneficiario });
            mensaje = 'Eliminación exitosa';
        } else {
            mensaje = 'Beneficiario no encontrado';
        }
    } catch (error) {
        mensaje = error.message || 'Error al eliminar el beneficiario';
    }

    res.json({
        msg: mensaje,
    });
};


module.exports = {
    getBeneficiario,
    postBeneficiario,
    putBeneficiario,
    deleteBeneficiario
}