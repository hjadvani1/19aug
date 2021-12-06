import express, { Application, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv'
import router from './routes/routes'
import bodyparser from 'body-parser'
// import path from 'path';
import morgan from 'morgan';


dotenv.config()
const app: Application = express();

app.use(morgan('dev'))
app.use(bodyparser.json())
app.use(express.urlencoded({ extended: true }))
// app.set('view engine','html')
// app.set('views',path.join(__dirname,'views'))
app.use(router)
app.use((req: Request, res: Response, next: NextFunction) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
})
async function main() {

    await app.listen(process.env.PORT || 4000, async () => {
        console.log('server is running');

    })

}

main();

