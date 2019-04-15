var gmbh = require('gmbh');
var client;

function main(){

    client = new gmbh.gmbh();
    client.opts.service.name = "n1";
    client.Route("gatherData", gatherData);
    client.Start()
        .then(()=>{
            // setTimeout(testRequest, 5000);
        });
}

async function gatherData(sender, request){
    let a = request.get("xid");
    let retval = client.NewPayload();
    retval.append("result", `hello from n1; returning same message; message=${a}`)
    return retval;
}

// async function testRequest(){
//     let data = new gmbh.payload();
//     data.appendTextfields('xid', 'zxcvqwer12340987');
//     let value = await client.MakeRequest("c4", "gatherData", data);
//     console.log(value);
// }

main();