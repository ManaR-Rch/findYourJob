import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let message = 'Une erreur est survenue';

        if (error.status === 0) {
          message = 'Impossible de se connecter au serveur';
        } else if (error.status === 404) {
          message = 'Ressource non trouvée';
        } else if (error.status === 500) {
          message = 'Erreur serveur';
        }

        console.error('HTTP Error:', error.status, message);
        return throwError(() => new Error(message));
      })
    );
  }
}
