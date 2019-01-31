import { RequestMethod } from '../constant/request-method.enum';

export interface IBatchConfigurationOptions {

  /**
   * The root endpoint url which is used to determine if the http call is destinted to an endpoint that can be batched.
   */
  rootEndpointUrl: string;

  /**
   * The url of the exposed batch endpoint that is associated with the service defined in rootEndpointUrl.
   */
  batchEndpointUrl: string;

  /**
   * True indicates the calls to the rootEndpointUrl will be batched.  False disabled the batcher.
   */
  enabled?: boolean;

  /**
   * The minimum number of http requests that trigger a batch request to be sent.
   * Default 2
   */
  minRequestsPerBatch?: number;

  /**
   * The maximum number of http requests that can be batched in a single batch request.
   * Default 20
   */
  maxRequestsPerBatch?: number;

  /**
   * The period of time to wait in milliseconds between recieving the first http request and sending the batch.
   *  Default 50
   */
  batchRequestCollectionDelayMilliseconds?: number;

  /**
   *  Requests with these http verbs will be ignored and not form part of the batch.
   */
  ignoredHttpVerbs?: RequestMethod[];

  /**
   * A request name that is passed as part of the content-disposition header.  Needed for some Java servers.
   */
  uniqueRequestName?: string;

  /**
   * True to send cookies, defaults to false to reduce request size.
   */
  sendCookies?: boolean;

  /**
   * The type of batcher that will be used to construct and parse batching requests.
   *
   */
  // httpBatchingAdapter?: WellKnownHttpBatchingAdapters | IBatchHttpRequestAdapter;

  /**
   * An optional function which determines if the request can be batched
   */
  canBatchRequest?: (request: Request) => boolean;

  /**
   * Lifecycle hook to modify the batch request just before it is sent.  This can be use to add aditional
   * headers to the request. eg: "Authorisation: Bearer ..."
   */
  onBeforeSendBatchRequest?: (batchRequest: Request) => void;
}
