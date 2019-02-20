declare module "tencentcloud-sdk-nodejs" {
  namespace common {
    class ClientProfile {
      /**
       * @param signMethod 签名方法，当前支持(HmacSHA1 HmacSHA256)
       * @param httpProfile http相关选项实例
       */
      constructor(signMethod?: string, httpProfile?: HttpProfile);
      signMethod: string;
      httpProfile: HttpProfile;
    }
  }
}
