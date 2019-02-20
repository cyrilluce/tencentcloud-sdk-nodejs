declare module "tencentcloud-sdk-nodejs" {
  namespace common {
    class HttpProfile {
      /**
       * @param protocol 协议，目前支持（https://）
       * @param endpoint 接入点域名，形如（cvm.ap-shanghai.tencentcloud.com）
       * @param reqMethod  请求方法，目前支持（POST GET）
       * @param reqTimeout 请求超时时间，默认60s
       */
      constructor(
        protocol?: string,
        endpoint?: string,
        reqMethod?: string,
        reqTimeout?: number
      );
      protocol: string;
      endpoint: string;
      reqMethod: string;
      reqTimeout: number;
    }
  }
}
