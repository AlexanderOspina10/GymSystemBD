const {Router} = require('express')

const route = Router()


const{getBeneficiario, postBeneficiario, putBeneficiario, deleteBeneficiario} = require('../controllers/beneficiario')//IMPORTAR EL CONTROLADOR

route.get('/', getBeneficiario)

route.post('/', postBeneficiario)

route.put('/', putBeneficiario)

route.delete('/', deleteBeneficiario)

module.exports = route 