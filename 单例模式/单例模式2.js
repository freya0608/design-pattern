/**
 * Created by miguel on 2018/12/9.
 * https://www.jetbrains.com/help/webstorm/file-template-variables.html
 动画callback只支持1.x版本的TransitionGroup
 */
class LoginForm {
    constructor(){
        this.state = 'hide';
    }
    show(){
        if(this.state === 'show'){
            alert('已经显示');
            return
        }
    }
    hide(){
        if(this.state ==='hide'){
            alert('已经隐藏');
            return
        }
    }
}
LoginForm.getInstance = (function () {
    let instance;
    return function () {
        if(!instance){
            instance = new LoginForm();
        }
        return instance
    }
})();

let login1 = LoginForm.getInstance();
login1.show();

let login2 = LoginForm.getInstance();
login2.show();

console.log('login1 === login2',login1 === login2)