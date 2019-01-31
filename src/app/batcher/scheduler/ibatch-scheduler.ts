import { IBatchRequest } from '../model/ibatch-request.model';
export interface IBatchScheduler {

    schedule<T>(request: IBatchRequest<T>): void;
    flushRequests(): void;
    performHttpRequest<T>(requests: IBatchRequest<T>[]): void;
    performBatchRequest<T>(requests: IBatchRequest<T>[]): void;
}
