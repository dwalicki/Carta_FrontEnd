import { Injectable } from '@angular/core';
import { Cost } from './cost';

@Injectable()
export class Asset {
    constructor(
        public id: number,
        public asset_class: string,
        public quantity: number,
        public cost: Cost,
        public investment_date: string) { }
}
