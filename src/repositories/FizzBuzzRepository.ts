import path from 'path';
import { GetStartScreenType } from '../interfaces/FizzBuzzInterfaces.js';
import { getFizzBuzzString } from './assets/FizzBuzzRepoAssets.js';

export const FizzBuzz = (num: number): string[]=> {
    const result: string[] = [];
    for (let i = 1; i <= num; i++) {
        result.push(getFizzBuzzString(i));
    }
    return result;
}
export const GetStartScreen = () => {
    const options = {
        root: path.join('./src/html/')
    }
    const fileName = 'index.html';
    const result :GetStartScreenType = { options: options, fileName: fileName }
    return result
}
export const FibStyleRandom = (n: number): number[] => {
    let a = 1;
    let b = 2;
    const randomNumbers = [];
    for (let i = 0; i < n; i++) {
        const timestamp = new Date().getTime();
        const randomSeed = (timestamp % 100) / 100;
        const nextFibonacci = a + b;
        const randomNumber = Math.floor(randomSeed * nextFibonacci);
        randomNumbers.push(randomNumber);
        a = b;
        b = nextFibonacci;
    }
    return randomNumbers;
}
export const FizzBuzzForNumbersArray = (arr: number[]): string[] => {
        const result: string[] = [];
        for (const number of arr) {
            result.push(getFizzBuzzString(number));
        }
        return result;
}
export const getDigitsOfPi =(n: number): number[]|[] =>{
    if (n <= 0) {
      return [];
    }
    const pi = Math.PI;
    const decimalPart = pi - Math.floor(pi);
    const decimalString = decimalPart.toString().substring(2);
    const digits = decimalString.split('').map(Number);
    return digits.slice(0, n);
}
  