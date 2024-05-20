const AfricasTalking = require('africastalking');
//T Initialize Africa's Talking
const africastalking = AfricasTalking({
    apiKey: '6c1e58aa7491698d1208573c1684a24c819c65c2efbb5c7ef4ee6dfd473fe45f',
    username: 'sandbox'
});

module.exports = async function sendSMS(phone,msg) {
    var phone = typeof(phone)=='string' && phone.trim().length ==13 ? phone.trim():false;
    var msg = typeof(msg)=='string' && msg.trim().length>1 ? msg.trim(): false;
    if(phone && msg){
        try {
            const result = await africastalking.SMS.send({
                to: phone,
                message: msg
            });
            console.log(result);
        } catch (ex) {
            console.error(ex);
        }
    }else{
        console.log("Invalid fields entered");
    }

};