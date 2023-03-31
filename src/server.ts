import express, {Request, Response, Application} from 'express';
import bodyParser from 'body-parser';
import { upDateData } from './firebase-config';
import { updateData } from './types/types';

const PORT:number = 4000; 
const app: Application = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req:Request, res:Response) => {
    console.log(req.body)
    return res.status(200).json({
        message: 'works'
    })
})

app.post('/payment-result/:orderId', async (req:Request, res:Response) => {
    try{
        const baseUrl = process.env.FRONTEND_DOMAIN;
        let { orderId } = req.params;
        const { TRANSACTION_STATUS } = req.body;
        const payload: updateData = {
            orderId,
            paymentStatus: TRANSACTION_STATUS
        }

        await upDateData("orders", payload);
        
        return res.status(301).redirect(`${baseUrl}/payment-confirmation?TRANSACTION_STATUS=${TRANSACTION_STATUS}`)
    }catch (e:any) {
        console.log(e)
    }
    
})

app.listen(PORT, () => {
    console.log('car wash server is running at port: '+PORT);
})