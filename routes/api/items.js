const express = require ('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route  GET api/items
// @desc   Get All Item
// @access Public

// router.get('/', async(req, res) => {
//     Item.find()
//         .sort({ date: -1 })
//         .then(items => res.json(items))   
//     });
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});



// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/', async(req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});




// @route   DELETE api/items/:id
// @desc    Delete An Item
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const deletedDocument = await Item.findByIdAndRemove(req.params.id);
    if (!deletedDocument) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.json({ message: 'Document deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: error.message });
  }
});





module.exports = router;