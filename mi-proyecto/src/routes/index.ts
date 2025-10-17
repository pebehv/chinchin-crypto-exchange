import { Router } from 'express';

const router = Router();

export const setRoutes = (app) => {
    app.use('/api', router);

    // Define your routes here
    router.get('/example', (req, res) => {
        res.send('Hello from the example route!');
    });

    // Add more routes as needed
};