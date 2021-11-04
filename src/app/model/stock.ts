export class Stock {
    favorite: boolean = false; // auto-initialized
    percentChange: number = 0; // auto-initiaLIZED

    constructor(public name: string, public code: string, public price: number, public previousPrice: number) {
        this.percentChange = parseFloat(((price / previousPrice) * 100).toFixed(1));
    }

    isPositiveChange(): boolean {
        return this.price > this.previousPrice ? true : false;
    }
}
