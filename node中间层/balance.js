'use strict';
const commonFragment = require('../../common/fragment');

module.exports = (app) => {

    class BalanceController extends app.RemoteController {

        * index() {
            const loginInfo = yield this.ctx.checkLogin(this, true);

            // 获取左侧栏以及头部数据 start
            const commonHeaderType = 'menu';
            const commonSidebarType = 'member';
            const pageUrl = decodeURIComponent(this.ctx.request.protocol + '://' + this.ctx.request.host + this.ctx.request.url); // 获取当前页面访问的url

            const pageData = yield {
                loginInfo,
                sideType: 0,
                headerTitle: '资金管理',
                commonHeaderType,
                commonSidebarType,
                balance: this.ctx.service.payService.getAcctAmt({
                    type: 0
                }),
                state: this.ctx.service.payService.getInitInfo()
            };
            // 获取公共header
            const centerFragment = yield commonFragment.getCenterFragment(commonHeaderType, pageData.headerTitle, pageUrl, this.ctx);

            pageData.centerFragment = centerFragment;

            if (pageData.balance && pageData.balance.data) {
                pageData.balance = pageData.balance.data;
            }

            // 渲染页面
            yield this.ctx.render('pay/back/payment/balance/balance.html', pageData);
        }

    }

    return BalanceController;

};