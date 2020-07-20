const express = require('express');
const router = express.Router();
const Menu = require('../models/menuModel');

// /api/
router.get('/', (req, res) => res.send('This is root!'))

router.get('/menu', async (req, res) => {
    try {
        const menu = await Menu.find()
        return res.json({ menu })
    } catch (error) {
        console.log('error')
        return res.status(500).send(error.message);
    }
})

router.post('/menu', async (req, res) => {
    try {
        const menu = await new Menu(req.body)
        await menu.save()
        return res.status(201).json({
            menu,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

router.get('/menu/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const menu = await Menu.findById(id)
        if (menu) {
            return res.status(200).json({ menu });
        }
        return res.status(404).send('Menu with the specified ID does not exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

router.put('/menu/:id', async (req, res) => {
    if (req.body.paid === "true") {
        req.body.paid = true;
    } else {
        req.body.paid = false;
    }
    try {
        const { id } = req.params;
        await Menu.findByIdAndUpdate(id, req.body, { new: true }, (err, menuItem) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!menuItem) {
                res.status(500).send('Item not found!');
            }
            return res.status(200).json(menuItem);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
    
})

router.delete('/menu/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Menu.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Item deleted");
        }
        throw new Error("Item not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

module.exports = router;