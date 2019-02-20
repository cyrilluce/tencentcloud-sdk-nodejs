import { common } from "tencentcloud-sdk-nodejs";

declare module "tencentcloud-sdk-nodejs" {
  namespace scf.v20180416 {
    namespace Models {
      interface IUpdateFunctionConfigurationRequest {
        /**  要修改的函数名称  */
        FunctionName: string;
        /**  函数描述。最大支持 1000 个英文字母、数字、空格、逗号和英文句号，支持中文  */
        Description?: string;
        /**  函数运行时内存大小，默认为 128 M，可选范 128 M-1536 M  */
        MemorySize?: number;
        /**  函数最长执行时间，单位为秒，可选值范 1-300 秒，默认为 3 秒  */
        Timeout?: number;
        /**  函数运行环境，目前仅支持 Python2.7，Python3.6，Nodejs6.10，PHP5， PHP7，Golang1 和 Java8  */
        Runtime?: string;
        /**  函数的环境变量  */
        Environment?: IEnvironment;
        /**  函数的私有网络配置  */
        VpcConfig?: IVpcConfig;
      }
      interface UpdateFunctionConfigurationRequest
        extends IUpdateFunctionConfigurationRequest {}
      class UpdateFunctionConfigurationRequest extends common.AbstractModel<
        IUpdateFunctionConfigurationRequest
      > {}

      interface IVpcConfig {
        /**  私有网络 的 id  */
        VpcId: string;
        /**  子网的 id  */
        SubnetId: string;
      }
      interface VpcConfig extends IVpcConfig {}
      class VpcConfig extends common.AbstractModel<IVpcConfig> {}

      interface IUpdateFunctionConfigurationResponse {
        /**  唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。  */
        RequestId: string;
      }
      interface UpdateFunctionConfigurationResponse
        extends IUpdateFunctionConfigurationResponse {}
      class UpdateFunctionConfigurationResponse extends common.AbstractModel<
        IUpdateFunctionConfigurationResponse
      > {}

      interface IEnvironment {
        /**  环境变量数组  */
        Variables: IVariable[];
      }
      interface Environment extends IEnvironment {}
      class Environment extends common.AbstractModel<IEnvironment> {}

      interface IVariable {
        /**  变量的名称  */
        Key: string;
        /**  变量的值  */
        Value: string;
      }
      interface Variable extends IVariable {}
      class Variable extends common.AbstractModel<IVariable> {}
    }
  }
}
