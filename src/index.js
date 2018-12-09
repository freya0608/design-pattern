/**
 * Created by freya on 2018/12/9.
 * https://www.jetbrains.com/help/webstorm/file-template-variables.html
 动画callback只支持1.x版本的TransitionGroup
 */

class Person {
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}

let p = new Person('freya555666');
console.log(p.getName());