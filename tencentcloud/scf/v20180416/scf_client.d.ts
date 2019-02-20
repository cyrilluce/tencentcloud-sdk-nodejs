declare module "tencentcloud-sdk-nodejs" {
  namespace scf.v20180416 {
    class Client extends common.AbstractClient {
      constructor(
        credential: common.Credential,
        region: string,
        profile: common.ClientProfile
      );
      /**
       * 该接口根据传入参数更新函数配置。
       */
      UpdateFunctionConfiguration(
        req: Models.UpdateFunctionConfigurationRequest,
        cb: (err, data: Models.UpdateFunctionConfigurationResponse) => void
      );
    }
  }
}
