/**
 * 手机号校验
 */
let isPhoneNum = function (phoneContent) {
    //校验的手机号
    let phoneNum = phoneContent.valueParams;
    //动态传入的校验规则
    let validateRules = phoneContent.validateRules;
    //默认的校验规则：以1开头的11位数字
    let regx = /^1\d{10}$/;
    //当动态传入的校验规则存在且是RegExp对象，则使用传入的校验规则，否则使用默认校验规则
    validateRules = (validateRules && validateRules instanceof RegExp) ? validateRules : regx;
    //符合校验规则返回true，否则返回false
    if (!validateRules.test(phoneNum)) {
        return false;
    } else {
        return true;
    }
};
/**
 * 保留两位小数
 * @param options
 * @returns {boolean}
 */

let isMoney = function (options) {
    //校验的地址
    let money = options.valueParams;
    //动态传入的校验规则
    let validateRules = options.validateRules;
    //默认的校验规则：以1开头的11位数字
    let regx = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
    //当动态传入的校验规则存在且是RegExp对象，则使用传入的校验规则，否则使用默认校验规则
    validateRules = (validateRules && validateRules instanceof RegExp) ? validateRules : regx;
    //符合校验规则返回true，否则返回false
    if (!validateRules.test(money)) {
        return false;
    } else {
        return true;
    }
};

let vertifyTool ={
    "isPhoneNo":isPhoneNum,
     "isMoney":isMoney
};
exports.vertifyTool=vertifyTool;