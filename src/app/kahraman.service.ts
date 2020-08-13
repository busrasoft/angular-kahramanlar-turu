import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Kahraman } from './kahraman';
import { KAHRAMANLAR } from './mock-kahramanlar';
import { MesajService } from './mesaj.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class KahramanService {

  constructor(
    private mesajService: MesajService,
    private http: HttpClient
  ) { }

  private kahramanlarUrl = 'api/kahramanlar';  // URL to web api

  /** GET Kahramanes from the server */
  getKahramanlar(): Observable<Kahraman[]> {
    return this.http.get<Kahraman[]>(this.kahramanlarUrl)
    .pipe(
      tap(_ => this.log('fetched Kahramanes')),
      catchError(this.handleError<Kahraman[]>('getKahramanlar', []))
    );
  }
  getKahraman(id: number): Observable<Kahraman> {
    const url = `${this.kahramanlarUrl}/${id}`;
    return this.http.get<Kahraman>(url).pipe(
      tap(_ => this.log(`fetched Kahraman id=${id}`)),
      catchError(this.handleError<Kahraman>(`getKahraman id=${id}`))
    );
  }

  /** Log a KahramanService message with the MessageService */
  private log(mesaj: string) {
    this.mesajService.add(`KahramanService: ${mesaj}`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

/** PUT: update the Kahraman on the server */
updateKahraman(kahraman: Kahraman): Observable<any> {
  return this.http.put(this.kahramanlarUrl, kahraman, this.httpOptions).pipe(
    tap(_ => this.log(`updated kahraman id=${kahraman.id}`)),
    catchError(this.handleError<any>('updateKahraman'))
  );
}

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
}
