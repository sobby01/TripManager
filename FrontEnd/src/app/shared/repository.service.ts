import  {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url.service';

@Injectable({
    providedIn: 'root'
  })
  
export class RepositoryService{

    constructor( public http: HttpClient, public envService : EnvironmentUrlService  ){}

    public update(route: string, body){
        return this.http.put(this.createCompleteRoute(route, this.envService.urlAddress), body, this.generateHeaders());
    }

    public create(route: string, body) {
        return this.http.post(this.createCompleteRoute(route, this.envService.urlAddress), body, this.generateHeaders());
    }

    public getData(route: String){
        return this.http.get(this.createCompleteRoute(route, this.envService.urlAddress ));
    }

    public delete(route: string){
        return this.http.delete(this.createCompleteRoute(route, this.envService.urlAddress));
    }

    private createCompleteRoute(route: String, envAddress: String) {
        return `${envAddress}/${route}`;
    }
    
    private generateHeaders() {
        return {
          headers: new HttpHeaders({'Content-Type': 'application/json'})
        }
    }

}