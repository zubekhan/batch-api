import { BatchConfiguration } from './batch-configuration';
export class BatchConfigurationCollection {
    /**
   * A collection of http batch configurations for
   * each batchable endpoint.
   */
  public constructor(public configurations: BatchConfiguration[]) { }

  public getConfigurationForUrl(url: string): BatchConfiguration {
    if (this.configurations === undefined) {
      return undefined;
    }
    return this.configurations.filter((config) => url.indexOf(config.rootEndpointUrl) > -1)[0];
  }
}
