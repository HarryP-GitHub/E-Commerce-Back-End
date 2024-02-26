const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Fetches all categories
router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    // Using findAll to find all categories and includes the Product model
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    // If successful will send the data as JSON
    res.status(200).json(categoryData);
  } catch (err) {
    // If error will respond with error
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    // Finds the Category by Primary Key id
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    // If the category is not found then it will display error message
    if (!categoryData) {
      res.status(404).json({ message: 'No Category found matching this id'})
      return;
    }
    // If successful will display data
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try { 
    // creates new category and will respond with the new data
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    // will update the Category, where it's id is the id being searched
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    // If category id is not found then error message will show
    if (!categoryData) {
      res.status(404).json({ message: 'No Category found matching this id'})
      return;
    }
    // If successful will show updated data
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try { 
    // Will delete the category by the id
    const categoryData = await Category.destroy({
      where: { id: req.params.id, },
    });
    // if id is not found then it will show error 
    if (!categoryData) {
      res.status(404).json({ message: 'No Category found matching this id'});
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
