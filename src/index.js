/**
 * Created by freya on 2018/12/9.
 * https://www.jetbrains.com/help/webstorm/file-template-variables.html
 动画callback只支持1.x版本的TransitionGroup
 */

class SingObject {
    login(){
        console.log('logon...')
    }
}
SingObject.getInstance = (function () {
    let instance;
    return function () {
        if(!instance){
            instance = new SingObject();
        }
        return instance
    }
})();

//测试
let obj1 = SingObject.getInstance();
obj1.login();

let obj2 = SingObject.getInstance();
obj2.login();
console.log(obj1 === obj2); //true