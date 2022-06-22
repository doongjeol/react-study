import React, {useEffect, useState, useRef} from 'react';

const WebsocketPractice = () => {
    const [socketConnected, setSocketConnnected] = useState(false);
    const [sendMsg, setSendMsg] = useState(false);
    const [items, setItems] = useState([]);

    const url = 'ws://localhost:8083/chat'
    let ws = useRef(null);

    useEffect( () => {
        if(!ws.current) {
            ws.current = new WebSocket(url);
            ws.current.onopen = () => {
                console.log('connected to ' + url)
                setSocketConnnected(true)
            };
            ws.current.onclose = (error) => {
                console.log('disconnect from ' + url);
                console.log(error);
            };
            ws.current.onerror = (error) => {
                console.log('connection error ' + url);
                console.log(error);
            }
            ws.current.onmessege = (e) => {
                const data = JSON.parse(e.data);
                console.log(data);
                setItems( (prevItems) => [...prevItems, data]);
            };
        }
        return () => {
            console.log('clean up');
            ws.current.close();
        };
    }, []);

    useEffect( () => {
        if(socketConnected) {
            ws.current.send (
                JSON.stringify({
                    userName : 'hi',
                })
            )
            setSendMsg(true)
        }
    }, [setSocketConnnected])

    return (
        <div>
            <div>socket</div>
            <div>socket connected : {`${socketConnected}`}</div>
            <div>res:</div>
            <div>
                {items.map( (item) => {
                    return <div> {JSON.stringify(item)}</div>
                    
                })}
            </div>
        </div>
    )
}

export default WebsocketPractice