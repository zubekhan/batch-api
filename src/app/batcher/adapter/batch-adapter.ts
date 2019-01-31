import { HttpResponse, HttpRequest } from '@angular/common/http';
import { IBatchAdapter } from './ibatch-adapter';
export class BatchAdapter implements IBatchAdapter {

    batch<T>(requests: HttpRequest<T>[]): HttpRequest<T> {
        return null;
    }

    parse<T>(response: HttpResponse<T>): HttpResponse<T>[] {
        return null;
    }

}
