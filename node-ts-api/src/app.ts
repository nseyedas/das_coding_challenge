import express, { Application, Response, Request, NextFunction } from 'express';

const app: Application = express();

app.get('/calculator', (req: Request, res: Response, next: NextFunction) => {
    var coinArray = [.01, .05, .1, .25, .5, 1];
    var result = [];

    // const result = [];
    while (coinArray.length) {
        var coin :any = coinArray.pop(); 
        var count = Math.floor(req.query.amount / coin); // See how many times I need that coin
        req.query.amount -= count * coin; // Reduce the amount with that number of coins
        if (count) {
          result.push([coin, count])
        };
    }
    res.send(result);
    //compute optimal coins
});

app.listen(5000, () => console.log('Server Running'));