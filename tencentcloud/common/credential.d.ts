declare module "tencentcloud-sdk-nodejs" {
  namespace common {
    class Credential<TParams = any> {
      constructor(secretId: string, secretKey: string, token?: string);
    }
  }
}
