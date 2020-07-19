const express = require('express');
const router = express.Router();
const IceCream = require('../models/iceCreamModels');

router.get('/', (req, res) => res.send('This is root'))

router.get('/songs', async (req, res) => {
    try{
        const iceCream = await IceCream.find()
        return res.json({ iceCream })
    } catch(error) {
        console.log('error')
        return res.status(500).send(err.message)
    }
});

router.post('/songs', async (req, res) => {
    try{
        const songs = await new Song(req.body)
        await songs.save()
        return res.status(201).json({
            songs
        });
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
});

router.get('/songs/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const songs = await Song.findById(id)
        if(songs) {
            return res.status(200).json({songs})
        }
        return res.status(404).send('Song with specific ID doesnt exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

router.put('/songs/:id', async (req, res) => {
    try{
        const {id} = req.params;
        await Song.findByIdAndUpdate(id, req.body, { new: true }, (err, song) => {
            if (err) {
                res.status(500).send(err)
            }
            if (!song) {
                res.status(500).send('Song not found');
            }
            return res.status(200).json(song)
        })
    } catch (error) {
        return res.status(500).send(error.message)
    }
});

router.delete('/songs/:id', async (req, res) => {
    try{
        const{id} = req.params;
        const deleted = await Song.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Song Deleted');
        }
        throw new Error('Song not found');
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

module.exports = router;