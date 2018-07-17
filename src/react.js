var test1 = function() {
    this.b = 'b';
    if (__DEV__) {
        console.warn('Extra logging');
        //开发环境需要进行的处理
        //...
    }

    if (__PRERELEASE__) {
        console.log('prerelease');
        //预发环境需要进行的处理
       //...
    }
}
module.exports = test1;