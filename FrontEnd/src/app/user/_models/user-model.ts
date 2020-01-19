import { Injectable } from '@angular/core';
import {Adapter} from '../../shared/adapter';

export class UserModel{
    constructor(
        public Name : string,
        public FirstName : string,
        public LastName : string,
        public Mobile : string,
        public Email : string,
        public Address : string
    ){

    }
}

@Injectable({
    providedIn: 'root'
})

export class UserModelAdapter implements Adapter<UserModel> {
    adapt(item: any): UserModel {
        return new UserModel(item.Name, item.firstName, item.lastName, item.Email, item.Mobile, item.Address);
    }
}
