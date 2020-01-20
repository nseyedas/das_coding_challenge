import express, { Application, Response, Request, NextFunction } from 'express';
import cors from 'cors';



const app: Application = express();

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.get('/calculator', cors(corsOptions), (req: Request, res: Response, next: NextFunction) => {
    var coinArray = [.01, .05, .1, .25, .5, 1];
    var result = [];

    // const result = [];
    while (coinArray.length) {
        var coin :any = coinArray.pop(); 
        var count :any  = (req.query.amount / coin).toFixed(2);
        let currentCount = Math.floor(count);
        req.query.amount -= currentCount * coin; 
        if (currentCount) {
          result.push([coin, currentCount])
        };
    }
    res.json(result);
    //compute optimal coins
});

app.listen(5000, () => console.log('Server Running'));  
