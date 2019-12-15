import Mock from 'mockjs';
//home组件数据
import homeApi from './home';
import userApi from './user';
import loginApi from './login';

//设置请求延时
Mock.setup({
  timeout: '100-200'
});

// 首页相关数据拦截设置 /home/getDate
Mock.mock(/\/home\/getData/, 'get', homeApi.getHomeData);
Mock.mock(/\/home\/getList/, 'get', homeApi.getHomeList);

// 用户相关
Mock.mock(/\/user\/getUser/, 'get', userApi.getUserList);
Mock.mock(/\/user\/del/, 'get', userApi.deleteUser);
Mock.mock(/\/user\/batchremove/, 'get', userApi.batchremove);
Mock.mock(/\/user\/add/, 'post', userApi.createUser);
Mock.mock(/\/user\/edit/, 'post', userApi.updateUser);

//登陆
Mock.mock(/\/login\/getMenu/, 'post', loginApi.getMenu);
