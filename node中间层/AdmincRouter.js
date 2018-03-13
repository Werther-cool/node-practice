/**
 * 广告线-路由表
 */
module.exports = (app) => {
    // 广告活动线首页
    app.get('/adminc/', app.controller.adminc.index.index.index);

    // 获取公共头尾片断服务(整个页面)
    app.post('/api/service/getBody', app.controller.adminc.universal.universal.index);

    // 获取公共头尾片断服务(拆分页面)
    app.post('/api/service/getFragment', app.controller.adminc.universal.universal.fragment);

    // 获取登录和购务车片断服务
    app.post('/api/service/getLogin', app.controller.adminc.universal.universal.login);
};