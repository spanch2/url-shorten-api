import express from 'express';
export const router = express.Router();
import { Url } from '../models/url.js';

router.get('/:alias', async (req, res) => {
    try {
        // console.log(req.params.alias);
        let url = await Url.findOne({ alias: req.params.alias }).exec();
        if (url) {
            url.lastUsed = Date.now();
            await url.save();
            res.redirect(url.longUrl);
        } else {
            return res.status(404).json('URL not found');
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json('Server Error');
    }
})

export default router;