import buildService from '@helper/service'

// 值类型为String或Object,String为url(method),Object同axios(config)参数支持相同,data和params只能为对象类型
const settings = {
  // 获取成就列表
  getAchievementList: {
    url: 'service-user/app/user/achievement',
    method: 'get',
    params: {}
  },
  // 获取成就奖励
  getAchievementAward: {
    url: 'service-user/app/user/achievement/award',
    method: 'post',
    data: {}
  },
  // 获取成就详情
  getAchievementDetail: {
    url: 'service-user/app/user/achievementDetail',
    method: 'get',
    params: {}
  }
}

export default buildService(settings)
