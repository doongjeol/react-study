import SockJs from "sockjs-client";
import StompJs from "stomjs";

url = "";
const sock = new SockJs(url)
const stomp = StompJs.over(sock);

const stompConnect = () => {
    try{
        stomp.debug = null;

        stomp.connect(token, () => {
            stomp.subscribe(
                url,
                (data) => {
                    const newMessage = JSON.parse(data.body);
                },
                token
            )
        })
    } catch (err){
        console.log(err)
    }
};

const stompDisConnect = () => {
    try{
        stomp.debug = null;
        stomp.disconnect(() => {
            stomp.unsubscrive("sub-0");
        }, token);
    } catch (err){
        console.log(err)
    }
}

const SendMessage = () => {
    stomp.debug = null;
    const data = {
        type : "TALK",
        //data 입력
    }

    // 예시 - 데이터 보낼 때 json 형식을 맞추어 보낸다.
    stomp.send("", token, JSON.stringify(data))
}