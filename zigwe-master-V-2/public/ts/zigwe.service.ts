import {Injectable} from '@angular/core';
import {Headers, Http,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Food} from './Food';

@Injectable()
export class ZigweService{
    constructor(private http: Http) { }
    getFoodItems(category:String,term:string):Promise<Food[]>{
        let params  = 'category='+category;
        if(term && term.length>0){
            params += '&term='+term;
        }
        return this.http.get('api/foods?'+params).toPromise().then(
                response => response.json() as Food[]
            ).catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}