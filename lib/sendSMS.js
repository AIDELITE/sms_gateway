//T Dependecies
const AfricasTalking = require('africastalking');
const configFiles = require("./config");

//T Initialize Africa's Talking
const africastalking = AfricasTalking({
    apiKey: configFiles.apiKey,
    username: configFiles.username
});

module.exports = async function sendSMS(phone,msg,callback) {
    var phone = typeof(phone)=='string' && phone.trim().length ==13 ? phone.trim():false;
    var msg = typeof(msg)=='string' && msg.trim().length> 1 ? msg.trim(): false;
    if(phone && msg){
        try {
            const result = await africastalking.SMS.send({
                to: phone,
                message: msg
            });
            callback(200,result);
        } catch (ex) {
            callback(401,ex);
        }
    }else{
        callback(400,"Invalid fields entered");
    }

};