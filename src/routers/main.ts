import express, { Request, Response } from 'express';
import { FibStyleRandom, FizzBuzz, FizzBuzzForNumbersArray, getDigitsOfPi, GetStartScreen } from '../repositories/FizzBuzzRepository.js';

const app = express();
const port = 3000;

app.get('/', async (req: Request, res: Response) => {
    const info = GetStartScreen()
    res.sendFile(info.fileName, info.options);
    return;
}
);
app.get('/fizzbuzz/:number', (req: Request, res: Response) => {
    const number = parseInt(req.params.number);
    const info = FizzBuzz(number)
    if (isNaN(number)) {
        res.status(400).json({ error: 'Invalid number entered' });
    } else {
        res.send(info)
    }
});
app.get('/randomfibfizzbuzz/:number', (req: Request, res: Response) => {
    const number = parseInt(req.params.number);

    if (isNaN(number)) {
        res.status(400).json({ error: 'Invalid number entered' });
    } else {
        res.send(FizzBuzzForNumbersArray(FibStyleRandom(number)))
    }
})
app.get('/pifizzbuzz/:number', (req: Request, res: Response) => {
    const number = parseInt(req.params.number);

    if (isNaN(number)) {
        res.status(400).json({ error: 'Invalid number entered' });
    } else {
        res.send(FizzBuzzForNumbersArray(getDigitsOfPi(number)))
    }
});
app.listen(port, () => {
    console.log(`Server started at ${port}th port`);
});
