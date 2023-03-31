import express from 'express';
import bodyParser from 'body-parser';
import { upDateData } from './firebase-config';
const PORT = 4000;
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    console.log(req.body);
    return res.status(200).json({
        message: 'works'
    });
});
app.post('/payment-result/:orderId', async (req, res) => {
    try {
        const baseUrl = process.env.FRONTEND_DOMAIN;
        let { orderId } = req.params;
        const { TRANSACTION_STATUS } = req.body;
        const payload = {
            orderId,
            paymentStatus: TRANSACTION_STATUS
        };
        await upDateData("orders", payload);
        return res.status(301).redirect(`${baseUrl}/payment-confirmation?TRANSACTION_STATUS=${TRANSACTION_STATUS}`);
    }
    catch (e) {
        console.log(e);
    }
});
app.listen(PORT, () => {
    console.log('car wash server is running at port: ' + PORT);
});
//# sourceMappingURL=server.js.map