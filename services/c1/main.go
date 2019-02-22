package main

import (
	"github.com/gmbh-micro/gmbh"
)

func main() {
	runtime := gmbh.SetRuntime(gmbh.RuntimeOptions{Blocking: true, Verbose: true})
	// standalone := gmbh.SetStandalone(gmbh.StandaloneOptions{CoreAddress: "localhost:49550"})
	service := gmbh.SetService(gmbh.ServiceOptions{Name: "c1"})
	client, err := gmbh.NewClient(runtime, service)
	if err != nil {
		panic(err)
	}
	client.Route("gatherData", handleData)
	client.Start()
}

func handleData(req gmbh.Request, resp *gmbh.Responder) {
	resp.Result = "hello from c1; returning same message; message=" + req.Data1
}
