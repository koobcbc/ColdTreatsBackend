const express = require('express');
const router = express.Router();
const IceCream = require('../models/iceCreamModels');

router.get('/', (req, res) => res.send('This is root'))

router.get('/iceCream', async (req, res) => {
    try{
        const iceCream = await IceCream.find()
        return res.json({ iceCream })
    } catch(error) {
        console.log('error')
        return res.status(500).send(err.message)
    }
});

router.post('/iceCream', async (req, res) => {
    try{
        const iceCream = await new IceCream(req.body)
        await iceCream.save()
        return res.status(201).json({
            iceCream
        });
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
});

router.get('/iceCream/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const iceCream = await IceCream.findById(id)
        if(iceCream) {
            return res.status(200).json({iceCream})
        }
        return res.status(404).send('IceCream with specific ID doesnt exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

router.put('/iceCream/:id', async (req, res) => {
    try{
        const {id} = req.params;
        await IceCream.findByIdAndUpdate(id, req.body, { new: true }, (err, iceCream) => {
            if (err) {
                res.status(500).send(err)
            }
            if (!iceCream) {
                res.status(500).send('IceCream not found');
            }
            return res.status(200).json(iceCream)
        })
    } catch (error) {
        return res.status(500).send(error.message)
    }
});

router.delete('/iceCream/:id', async (req, res) => {
    try{
        const{id} = req.params;
        const deleted = await IceCream.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('IceCream Deleted');
        }
        throw new Error('IceCream not found');
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

module.exports = router;

