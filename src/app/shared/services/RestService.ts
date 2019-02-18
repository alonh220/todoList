import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
export abstract class RestService {

    protected baseUrl ;
  
    constructor(private http: HttpClient){
        this.baseUrl = 'http://localhost:3000/'
    }
    
     get<T>(relativeUrl: string): Observable<T> {
      return this.http.get<T>(this.baseUrl + relativeUrl, httpOptions);
        
      // as you see, the simple toJson mapping logic also delegates here
    }
    
    protected post<T>(relativeUrl: string, data: any): Observable<T>  {
      return this.http.post<T>(this.baseUrl + relativeUrl,data,  httpOptions);
    }
    
    protected delete<T>(relativeUrl: string): Observable<T>  {
      return this.http.delete<T>(this.baseUrl + relativeUrl, httpOptions);
    }
    
  
  } 