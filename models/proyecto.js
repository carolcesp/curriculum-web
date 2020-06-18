const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let proyectoSchema = new Schema({
    titulo: String,
    descripcion: String,
    url: String,
    cliente: String,
    urlCliente: String,
    categoria: {
        type: String,
        enum: ['angular', 'frontend', 'nodejs', 'backend','wordpress']
    }
});

module.exports = mongoose.model('Proyecto', proyectoSchema);