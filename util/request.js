function fetch({ 
    url,
    method = 'GET',
    data,
    showLoading = false,
    header = {
        'content-type': 'application/json'
    },
}) {
    if (showLoading) {
        uni.showLoading({
            mask: true
        });
    }
    if (method.toLowerCase() == 'post') {
        header['content-type'] = 'application/x-www-form-urlencoded'
    }
    return new Promise((resolve, reject) => {
        uni.request({
            url, //仅为示例，并非真实接口地址。
            header,
            data: {
                ...data,
                openid: uni.getStorageSync('openid') || '',
                language: uni.getStorageSync('language') || 'en'
            },
            method,
            success: (res) => {
                console.log(url, data, method, res);
                if (res.statusCode == 200) {
                    // if (res.data.status != 0) {
                    //  uni.showToast({
                    //      icon: "none",
                    //      title: res.data.msg,
                    //      duration: 2000
                    //  })
                    // }
                    resolve(res.data)
                    if (showLoading) {
                        uni.hideLoading();
                    }
                } else {
                    reject(res)
                }
            },
            error(err) {
                reject(err)
                uni.hideLoading();
            }
        });
    })

}

if( process.env && process.env.NODE_ENV === 'development'){
      // 这里调用拦截之前封装的fetch请求 fetch.before。
    Vue.prototype.$fetch = fetch.before( function(){
        return true;
    })
}else{
    Vue.prototype.$fetch = fetch
}