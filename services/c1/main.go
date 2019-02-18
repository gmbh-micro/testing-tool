package main

import (
	"github.com/gmbh-micro/gmbh"
)

func main() {
	runtime := gmbh.SetRuntime(gmbh.RuntimeOptions{Blocking: true, Verbose: true})
	client, err := gmbh.NewClient("./config.toml", runtime)
	if err != nil {
		panic(err)
	}
	client.Route("gatherData", handleData)
	client.Start()
}

func handleData(req gmbh.Request, resp *gmbh.Responder) {
	resp.Result = "hello from c1; returning same message; message=" + req.Data1
}
