var gmbh = require('gmbh');

var client;

function main(){

    client = new gmbh.gmbh();
    client.Route("gatherData", gatherData);
    client.opts.service.name = "n2";
    client.Start()
        .then(()=>{
            // setTimeout(testRequest, 5000);
        });
}

function gatherData(sender, request){
    let retval = client.NewPayload();
    retval.appendTextfields("result", `hello from n2; returning same message; message=${request.getTextfields('xid')}`)
    return retval;
}

main();