import { Injectable } from '@angular/core';
import { Cost } from './cost';
import { Asset } from './asset';

@Injectable()
export class Investment {
    constructor(
        public id: number,
        public name: string,
        public quantity: number,
        public cost: Cost,
        public issued_assets: Asset[]) { }
}
