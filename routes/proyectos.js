const router = require('express').Router();

const Proyecto = require('../models/proyecto');

router.get('/', async (req, res) => {
  const proyectos = await Proyecto.find().lean();
  res.render('proyectos/index', { proyectos })
})

router.get('/new', (req, res) => {
  res.render('proyectos/formulario')
})

router.post('/create', async (req, res) => {
  try {
    const proyecto = await Proyecto.create(req.body)
    console.log(proyecto)
    res.redirect('/proyectos')

  } catch (err) {
    res.json({ error: err});
  }
})

module.exports = router;
