import { HttpRequest, HttpResponse } from '@angular/common/http';


export interface IBatchAdapter {

    batch<T>(requests: HttpRequest<T>[]): HttpRequest<T>;
    parse<T>(response: HttpResponse<T>): HttpResponse<T>[];

}
