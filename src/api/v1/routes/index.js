import express from 'express';

const router = new express.Router();

import publicRoute from './public';
import adminRoute from './admin';

// sample api for check status
router.get('/', (req, res) => {
    res.send("API is working!")
});

router.use('/v1', publicRoute);
router.use('/v1/admin', adminRoute);

export default router;
