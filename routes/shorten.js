import express from 'express'
export const router = express.Router();
import { nanoid } from 'nanoid'
import { Url } from '../models/url.js';
import isURL from 'validator/lib/isURL.js';

router.post('/shorten', async (req, res) => {
    const url = req.body.url;
    const urlBase = process.env.URL_BASE;

    if (isURL(url)) {
        const alias = nanoid(4);
        const shortUrl = `${urlBase}/${alias}`;
        try {
            const urlDoc = new Url({
                alias,
                uid: "guest",
                longUrl: url,
                shortUrl,
                lastUsed: Date.now(),
            });

            await urlDoc.save();
            res.json(urlDoc);
        } catch (error) {
            console.log(error);
            res.status(500).json('Server Error');
        }
    } else {
        res.status(400).json('Invalid URL');
    }
})

export default router;