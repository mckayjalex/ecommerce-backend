// Import
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// /api/tags/ GET
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [
        {
          model: Product
        }
      ]
    })
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err)
  }
});

// /api/tags/:id GET
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product
        }
      ]
    })
    if (!tagData) {
      res.status(404).json({message: "Tag with this ID does not exist!"});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err)
  }
});

// /api/tags/ POST
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  } 
});

// /api/tags/:id PUT
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (!tagData) {
      res.status(404).json({message: "Tag with this ID does not exist!"});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// /api/tags/:id DELETE
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    if (!tagData) {
      res.status(404).json({message: "Tag with this ID does not exist!"});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Export router
module.exports = router;
