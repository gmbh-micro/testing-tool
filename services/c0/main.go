package main

import (
	"fmt"

	"github.com/gmbh-micro/gmbh"
)

func main() {

	runtime := gmbh.SetRuntime(gmbh.RuntimeOptions{Blocking: true, Verbose: true})
	// standalone := gmbh.SetStandalone(gmbh.StandaloneOptions{CoreAddress: "localhost:49550"})
	service := gmbh.SetService(gmbh.ServiceOptions{Name: "c0", PeerGroups: []string{"universal", "internal"}})
	client, err := gmbh.NewClient(runtime, service)
	if err != nil {
		panic(err)
	}
	client.Route("gatherData", handleData)
	client.Start()
}

func handleData(req gmbh.Request, resp *gmbh.Responder) {
	data := req.GetPayload()
	payload := gmbh.NewPayload()
	payload.AppendStringField(
		"result", fmt.Sprintf("hello from c0; returning same message; message=%s", data.GetStringField("xid")),
	)
	resp.SetPayload(payload)
}
