import Mock from 'mockjs';
export default {
  getMenu: config => {
    const { username, password } = JSON.parse(config.body);
    console.log(JSON.parse(config.body));
    // 先判断用户是否存在
    if (username == 'admin' || username == 'test1') {
      // 判断账号和密码是否对应
      if (username == 'admin' && password == 'admin') {
        return {
          code: 20000,
          data: {
            menu: [
              {
                path: '/',
                name: 'home',
                lable: '首页',
                icon: 's-home',
                url: 'Home/Home'
              },
              {
                path: '/DataManage',
                name: 'DataManage',
                lable: '表单提交',
                icon: 'suitcase',
                url: 'DataManage/DataManage'
              },
              {
                path: '/user',
                name: 'user',
                lable: '用户管理',
                icon: 'user',
                url: 'UserManage/UserManage'
              },
              {
                lable: '其他',
                name: 'page',
                icon: 'setting',
                children: [
                  {
                    path: '/page1',
                    lable: '测试1',
                    name: 'page1',
                    icon: 'setting',
                    url: 'Other/Page1'
                  },
                  {
                    path: '/page2',
                    lable: '测试2',
                    name: 'page2',
                    icon: 'setting',
                    url: 'Other/Page2'
                  }
                ]
              }
            ],
            info: {
              edit: true,
              rank: '超级管理员',
              name: 'Admin'
            },
            token: Mock.Random.guid(),
            message: '获取成功'
          }
        };
      } else if (username == 'test1' && password == '123') {
        return {
          code: 20000,
          data: {
            menu: [
              {
                path: '/',
                name: 'home',
                lable: '首页',
                icon: 's-home',
                url: 'Home/Home'
              },
              {
                path: '/user',
                name: 'user',
                lable: '用户查看',
                icon: 'user',
                url: 'UserManage/UserManage'
              },
              {
                path: '/DataManage',
                name: 'DataManage',
                lable: '表单提交',
                icon: 'suitcase',
                url: 'DataManage/DataManage'
              }
            ],
            info: {
              edit: false,
              rank: '测试人员',
              name: '用户1'
            },
            token: Mock.Random.guid(),
            message: '获取成功'
          }
        };
      } else {
        return {
          code: -999,
          data: {
            message: '密码错误'
          }
        };
      }
    } else {
      return {
        code: -999,
        data: {
          message: '用户不存在'
        }
      };
    }
  }
};
