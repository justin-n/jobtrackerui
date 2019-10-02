import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler) {

        const xhr = request.clone({
            headers: request.headers.set('X-Requested-With', 'XMLHttpRequest')
        });
        return next.handle(xhr);
    }
}
