var http = require("http");
var Client = require('node-rest-client').Client;


var iws_ifind = {
    host:"http://iws.dev.ifind.vn/v1",
//#endregion getOption
    getBrandList : function (callback,pageIndex=1,pageSize=24) {
        var api = new Client();
        var args = {
            headers:{
                "x-api-key": "ios_app_key",
                authorization: "Bearer $2a$10$5ddKobD5RDbmQa/ru1LS5ui9YPgexsYXZ7VhhuJl39fT1sWN4ktUK",
            }
        }
        var path = iws_ifind.host + "/mobile/brands?pageIndex=" + pageIndex + "&pageSize=" + pageSize;

        api.get(path, args, function (data, response) {
            callback(data, 2);
        });
    },
    getCategoryDeal : function (callback,dealID,pageIndex=1,pageSize=9) {
        var api = new Client();
        var args = {
            headers:{
                "x-api-key": "ios_app_key",
                authorization: "Bearer $2a$10$5ddKobD5RDbmQa/ru1LS5ui9YPgexsYXZ7VhhuJl39fT1sWN4ktUK",
            }
        }
        var path = iws_ifind.host + "/mobile/search/advanced?gender=0&areaId=0&dealType=0&categoryId=" + dealID +"&pageIndex" + pageIndex + "&pageSize=" + pageSize;

        api.get(path, args, function (data) {
            callback(data);
        });
    }
}

module.exports = iws_ifind;