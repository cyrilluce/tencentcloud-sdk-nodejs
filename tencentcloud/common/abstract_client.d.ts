declare module "tencentcloud-sdk-nodejs" {
  namespace common {
    class AbstractClient {
      /**
       * 实例化client对象
       * @param endpoint 接入点域名
       * @param version 产品版本
       * @param credential 认证信息实例
       * @param region 产品地域
       * @param profile 可选配置实例
       */
      constructor(
        endpoint: string,
        version: string,
        credential?: Credential,
        region?: string,
        profile?: ClientProfile
      );
      endpoint: string;
      version: string;
      credential: Credential;
      region: string;
      profile: ClientProfile;

      getEndpoint(): string;
    }
  }
}
