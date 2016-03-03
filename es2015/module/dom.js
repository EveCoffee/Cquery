/**
 * Created by coffee on 2015/8/21.
 */

function init(elementList){
    elementList.text = addText;
    elementList.html = addHtml;
}

//设置纯文本内容或者返回文本
var addText = function (text) {
    if(text){
        this.each(function (element, index) {
            element.innerText = text;
        });
    }else{
        text = null;
        this.each(function (element) {
            text = element.innerText;
        });
        return text;
    }

};

//设置html内容
var addHtml = function (html) {
    if(html){
        this.each(function (element, index) {
            element.innerHTML = html;
        });
    }else{
        html = null;
        this.each(function (element) {
            html = element.innerHTML;
        });
        return html;
    }

};


export default init;