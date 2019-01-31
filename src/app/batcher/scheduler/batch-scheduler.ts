import { IBatchScheduler } from './ibatch-scheduler';
import { Observable } from 'rxjs/Observable';
import { NgZone } from '@angular/core';
import { IBatchRequest } from '../model/ibatch-request.model';
import { BatchConfiguration } from '../config/batch-configuration';

export class BatchScheduler implements IBatchScheduler {
    private pendingRequests: IBatchRequest<any>[];
    private currentTimeoutHandle: any;

    public constructor(
        private configuration: BatchConfiguration,
        private httpRequestFn: (request: any) => Observable<any>,
        private ngZone: NgZone) {
        this.pendingRequests = new Array<IBatchRequest<any>>();
    }

    schedule<T>(request: IBatchRequest<T>): void {

    }

    flushRequests(): void {

    }

    performHttpRequest<T>(requests: IBatchRequest<T>[]): void {

    }

    performBatchRequest<T>(requests: IBatchRequest<T>[]): void {

    }
}
