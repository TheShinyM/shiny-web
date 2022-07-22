import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    public constructor(private authService: AuthService, public router: Router) {}

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const authToken: string = this.authService.getAuthorizationToken();
        const authReq: HttpRequest<unknown> = req.clone({
            setHeaders: { Authorization: "Bearer " + authToken }
        });
        return next.handle(authReq).pipe(
            tap(
                (event: HttpEvent<unknown>) => {},
                (error: Error) => {
                    if (error instanceof HttpErrorResponse && error.status === 401) {
                        this.router.navigate(["/auth"]);
                    }
                }
            )
        );
        // return next.handle(authReq);
    }
}
