import { IBatchConfigurationOptions, RequestMethod } from './ibatch-configuration-options';

export class BatchConfiguration {
    public rootEndpointUrl: string;
    public batchEndpointUrl: string;
    public enabled: boolean;
    public minRequestsPerBatch: number;
    public maxRequestsPerBatch: number;
    public batchRequestCollectionDelayMilliseconds: number;
    public ignoredHttpVerbs: RequestMethod[];
    public uniqueRequestName: string;
    public sendCookies: boolean;
    // public httpBatchingAdapter: WellKnownHttpBatchingAdapters | IBatchHttpRequestAdapter;
    public canBatchRequest: (request: Request) => boolean;
    public onBeforeSendBatchRequest: (batchRequest: Request) => void;

    public constructor(options: IBatchConfigurationOptions) {
        this.rootEndpointUrl = options.rootEndpointUrl;
        this.batchEndpointUrl = options.batchEndpointUrl;
        this.enabled = options.enabled !== undefined ? options.enabled : true;
        this.minRequestsPerBatch = options.minRequestsPerBatch || 2;
        this.maxRequestsPerBatch = options.maxRequestsPerBatch || 20;
        this.batchRequestCollectionDelayMilliseconds = options.batchRequestCollectionDelayMilliseconds || 75;
        this.ignoredHttpVerbs = options.ignoredHttpVerbs || [RequestMethod.HEAD, RequestMethod.OPTIONS, RequestMethod.TRACE];
        this.uniqueRequestName = options.uniqueRequestName;
        this.sendCookies = options.sendCookies !== undefined ? options.sendCookies : false;
        // this.httpBatchingAdapter = options.httpBatchingAdapter || WellKnownHttpBatchingAdapters.Http_MultipartMixed;
        this.canBatchRequest = options.canBatchRequest || (() => true);
        this.onBeforeSendBatchRequest = options.onBeforeSendBatchRequest || (() => { });
    }

}
