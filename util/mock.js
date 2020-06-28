Function.prototype.before = function( fn ){
    var self = this;
    return function(){
        let f = fn.apply( this, arguments );
        if( f ){
            console.log( arguments );
            let opt = arguments[0];
            let index = opt.url.lastIndexOf('/');
            var name = opt.url.substring(index+1);
            console.log(name);
            //这里mock返回， promise函数
            var url =` http://localhost:8080/${name}.json`;
            return mock(url);
        }
        return self.apply( this, arguments );
 
    }
}
function mock( url ){
    return uni.request({
        url: 'api/login', //仅为示例，并非真实接口地址。
        data: {
            text: new Date(),
        },
        method: 'GET',
        header: {
            'custom-header': 'hello' //自定义请求头信息
        }
    }).then( function( data ){
        return data[1].data;
    })
}