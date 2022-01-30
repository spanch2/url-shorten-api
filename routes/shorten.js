import express from 'express';
export const router = express.Router();
import { nanoid } from 'nanoid';
import { Url } from '../models/url.js';
import isURL from 'validator/lib/isURL.js';

router.post('/shorten', async (req, res) => {
    let longUrl = req.body.url;
    const urlBase = process.env.URL_BASE;
    let reqAlias = req.body.alias;
    res.header("Access-Control-Allow-Origin", "*");
    if (!longUrl) {
        return res.status(400).json('Missing URL');
    }
    if (isURL(longUrl)) {
        if (!isURL(longUrl, {require_protocol: true})) {
            longUrl = 'http://' + longUrl;
        }
        let alias;
        if (reqAlias) {
            if (reqAlias.length < 4) {
                return res.status(400).json('Alias must be at least 4 characters');
            } 
            const existing = await Url.findOne({ alias: reqAlias }, '').exec();
            console.log(existing);
            if (existing) {
                return res.status(409).json('Alias unavailable');
            } else {
                alias = reqAlias;
            }
        } else { 
            alias = nanoid(4);
            while (await Url.findOne({ alias: alias }, '').exec()) {
                alias = nanoid(4);
            }
        }
        const shortUrl = `${urlBase}/${alias}`;
        try {
            const urlDoc = new Url({
                alias,
                uid: "guest",
                longUrl,
                shortUrl,
                lastUsed: Date.now(),
            });

            await urlDoc.save();
            res.json({alias: urlDoc.alias, longUrl: urlDoc.longUrl, shortUrl: urlDoc.shortUrl});
        } catch (error) {
            console.log(error);
            return res.status(500).json('Server Error');
        }
    } else {
        return res.status(400).json('Invalid URL');
    }
})

export default router;