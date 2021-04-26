function connectElgatoStreamDeckSocket(inPort, inPluginUUID, inRegisterEvent, inInfo){
    websocket = new WebSocket("ws://localhost:" + inPort);

    websocket.onopen = function(){
        //WebSocket is connected, register the plugin
        var json = {
            "event": inRegisterEvent,
            "uuid": inPluginUUID
        };

        websocket.send(JSON.stringify(json));
    };

    //Listen for messages and log them
    websocket.onmessage = function(evt){
        console.log(evt);
    };
}