const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  // Using findAll will find all Tags
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  // Finds the tag by id
  try {
    const tagData = await Tag.findByPk(req.params.id, { 
      include: [{ model: Product }],
    });
    // If tag isnt found then it will display error
    if (!tagData) {
      res.status(404).json({ message: 'No tag found matching this id' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try { 
    // creates new tag and will display new tag if successful
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    // Will display error if there is an error
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  // Finds the tag by id and will update it
  try {
    const tagData = await Tag.update(req.body, { 
      where: { id: req.params.id },
    });
    // if no tag is found then it will display error message
  if (!tagData) {
    res.status(404).json({ message: 'No tag found matching this id' });
    return;
  }
  // Will display updated tag if update is successful
  res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    // Will remove the associated product tag
    // Not sure what is best practice for this
    await ProductTag.destroy({
      // Fixed it to target the associated productTag by tag_id
      where: { tag_id: req.params.id },
    });
    // Deletes the tag by id
    const tagData = await Tag.destroy({ 
      where: { id: req.params.id },
    });
    // If tag not found then will not be deleted
    if (!tagData) {
      res.status(404).json({ message: 'No tag found matching this id' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
