
class DataBaseConfig {
  // 1. 判断环境
  env
  constructor(){
    this.env = process.env === 'prod' ? 'prod' : 'dev'
  }
  // 2. 获取参数
  // 3. 设置数据库参数
  // 4. 获取参数配置方法
}