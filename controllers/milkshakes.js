const express = require('express');
const router = express.Router();
const Milkshake = require('../models/milkshakeModels');

// /api/
router.get('/', (req, res) => res.send('This is root!'))

router.get('/milkshakes', async (req, res) => {
    try {
        const milkshake = await Milkshake.find()
        return res.json({ milkshake })
    } catch (error) {
        console.log('error')
        return res.status(500).send(error.message);
    }
})

router.post('/milkshakes', async (req, res) => {
    try {
        const milkshake = await new Milkshake(req.body)
        await milkshake.save()
        return res.status(201).json({
            milkshake,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

router.get('/milkshakes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const milkshake = await Milkshake.findById(id)
        if (milkshake) {
            return res.status(200).json({ milkshake });
        }
        return res.status(404).send('Milkshake with the specified ID does not exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

router.put('/milkshakes/:id', async (req, res) => {
    // if (req.body.paid === "true") {
    //     req.body.paid = true;
    // } else {
    //     req.body.paid = false;
    // }
    try {
        const { id } = req.params;
        await Milkshake.findByIdAndUpdate(id, req.body, { new: true }, (err, shake) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!shake) {
                res.status(500).send('Item not found!');
            }
            return res.status(200).json(shake);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
    
})

router.delete('/milkshakes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Item.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Item deleted");
        }
        throw new Error("Item not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

module.exports = router;