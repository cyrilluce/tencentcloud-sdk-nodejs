declare module "tencentcloud-sdk-nodejs" {
  namespace common {
    class AbstractModel<TData> {
      deserialize(params: TData);
      /**
       * 将object转化为json格式的string
       */
      to_json_string(): string;

      /**
       * 将json格式的string转化为object
       */
      from_json_string(dataString: string);
    }
  }
}
