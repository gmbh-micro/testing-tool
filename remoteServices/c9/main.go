package main

import (
	"github.com/gmbh-micro/gmbh"
)

func main() {

	// runtime := gmbh.SetRuntime(gmbh.RuntimeOptions{Blocking: true, Verbose: true})
	// standalone := gmbh.SetStandalone(gmbh.StandaloneOptions{CoreAddress: "localhost:49550"})
	// service := gmbh.SetService(gmbh.ServiceOptions{Name: "ws"})

	// client, err := gmbh.NewClient(runtime, standalone, service)
	if err != nil {
		panic(err)
	}
	client.Route("gatherData", handleData)
	client.Start()
}

func handleData(req gmbh.Request, resp *gmbh.Responder) {
	resp.Result = "hello from c5; returning same message; message=" + req.Data1
}
