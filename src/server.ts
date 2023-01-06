import express, {Request, Response, Application} from 'express';
import bodyParser from 'body-parser';

const PORT:number = 4000; 
const app: Application = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/payment-result', (req:Request, res:Response) => {
    const convertBodyToQueryString = () => {
        const reqBodyArr: string[] = [];

        for(let x in req.body){
            reqBodyArr.push(`${x}=${req.body[x]}`);
        }

        return reqBodyArr.join('&');
    }
    console.log('wip')
    return res.status(301).redirect(`http://localhost:3000/payment-confirmation?${convertBodyToQueryString()}`)
    // res.status(200).json({
    //     message: `http://localhost:3000/payment-confirmation/?${convertBodyToQueryString()}`
    // })
})

app.listen(PORT, () => {
    console.log('car wash server is running at port: '+PORT);
})