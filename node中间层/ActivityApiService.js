'use strict';

module.exports = (app) => {

    /**
     * 营销活动接口(广告位，链接位，推荐位)
     */
    class ActivityApiService extends app.RemoteService {
        constructor(ctx) {
            super(ctx);
            this.channel = 'activityapi';
            this.config = this.ctx.app.config[this.channel];
        }

        // ========================================== 业务接口 =================================

        /**
         * 链接位接口
         */
        * getLink(linkid) {
            const paramsData = {linkid};
            const result = yield this.request('publish/link/getLink', {
                data: paramsData
            });

            return result;
        }

        /**
         * 推荐位接口
         */
        * getPos(positionId, pageSize) {
            const paramsData = {positionId, pageSize};
            const result = yield this.request('publish/pos/getPos', {
                data: paramsData
            });

            return result;
        }

        /**
         * 广告位接口
         */
        * getAd(adspaceId, length) {
            const paramsData = {adspaceId, length};
            const result = yield this.request('publish/ad/getAd', {
                data: paramsData
            });

            return result;
        }

        /**
         * 商品类别数据字典
         */
        * getDict(type) {
            const paramsData = {type};
            const result = yield this.request('publish/dict/getDict', {
                data: paramsData
            });

            return result;
        }

        // ========================================== 业务接口 =================================

    }

    return ActivityApiService;
};