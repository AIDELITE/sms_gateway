//T Dependecies
const AfricasTalking = require('africastalking');
const configFiles = require("./config");

//T Initialize Africa's Talking
const africastalking = AfricasTalking({
    apiKey: configFiles.apiKey,
    username: configFiles.username
});

//create a container for the send SMS
var smsFunction = {};

smsFunction.sendSMS= async(phone,msg,callback)=> {
    var phone = typeof(phone)=='string' && phone.trim().length ==13 ? phone.trim():false;
    var msg = typeof(msg)=='string' && msg.trim().length> 1 ? msg.trim(): false;
    if(phone && msg){
        try {
            const result = await africastalking.SMS.send({
                to: phone,
                message: msg
            });
            callback(false,result);
        } catch (ex) {
            callback(true,ex);
        }
    }else{
        callback(true,"Invalid fields entered");
    }

};

module.exports = smsFunction;