import { Injectable } from '@angular/core';
import {Adapter} from '../../shared/adapter';

export class HomeModel {
    constructor(
        public TripManager : string,
        public TripName : string,
        public TripDestination : string,
        public NoOfPeople: Number,
        public date: Date,
        public Total: Number
    ){ }
}
    
@Injectable({
    providedIn: 'root'
})

export class HomeModelAdapter implements Adapter<HomeModel> {
    adapt(item: any): HomeModel {
        return new HomeModel(item.UserName, item.TripName, item.TripDestination, item.NoOfPeople, item.date, item.Total);
    }
}
