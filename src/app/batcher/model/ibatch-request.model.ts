import { HttpRequest } from './http-request.model';
import { Observer } from 'rxjs/Observer';
export interface IBatchRequest<T> {
    request: HttpRequest<T>;
    observer: Observer<T>;
    cancelled: boolean;
}
