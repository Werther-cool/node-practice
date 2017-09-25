var http = require('http')
var queryString = require('querystring')

var postData = queryString.stringify({
    'content':"测试2222333",
    'cid': 8837
})

var options ={
    hostname:'www.imooc.com',
    port:80,
    path:'/course/documment',
    method:'POST',
    headers:{
        "Accept":" application / json, text/javascript, */*; q=0.01",
        "Accept-Encoding":"gzip, deflate",
        "Accept-Language":"zh-CN, zh;q=0.8, en;q=0.6",
        "Cache-Control":"no-cache",
        "Connection":"keep-alive",
        "Content-Length":postData.length,
        "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
        "Cookie":"PHPSESSID = pohpp7seshvonoh9jtkttjr767; imooc_uuid=f21cb46c - dafb - 42c0-99b8-2459456f4b83; imooc_isnew_ct=1505987832; loginstate=1; apsid=IyNTEyMTZmMGNkMzczNDk3MDk1YmYyMzkyNjI0NTMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzc5MzU1OQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB6aG91d2FuZ3l1bHVAaWNsb3VkLmNvbQAAAAAAAAAAADIwZGI2ODM1OWJmMDE1MzVkZDlkZmU1ZWNhN2M3OWNlZI3DWWSNw1k % 3DN2; last_login_username=zhouwangyulu % 40icloud.com; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1506221040; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1506221103; imooc_isnew=2; cvde=59c702b4cbc9f-62",
        "Host":"www.imooc.com",
        "Origin":"http://www.imooc.com",
                "Pragma":" no - cache",
        "Referer":"http://www.imooc.com/video/8837",
        "User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
        "X-Requested-With":"XMLHttpRequest"
    }

}

var req = http.request(options,function (res) {
    console.log("status:"+ res.statusCode)
    console.log('header:'+JSON.stringify(res.headers))

    res.on('data',function (chunk) {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    })

    res.on('end',function () {
        console.log("评论完成");
    })
    
}) 
    req.on('error',function (e) {
        console.log("err:"+e.messsage)
    })
    req.write(postData)
    req.end()









