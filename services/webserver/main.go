package main

import (
	"fmt"
	"log"
	"net/http"
	"path"
	"text/template"

	"github.com/gmbh-micro/gmbh"
	"github.com/gorilla/mux"
	"github.com/rs/xid"
)

var client *gmbh.Client

func main() {

	runtime := gmbh.SetRuntime(gmbh.RuntimeOptions{Blocking: false, Verbose: true})
	// standalone := gmbh.SetStandalone(gmbh.StandaloneOptions{CoreAddress: "localhost:49550"})
	service := gmbh.SetService(gmbh.ServiceOptions{Name: "ws"})

	var err error
	client, err = gmbh.NewClient(runtime, service)
	if err != nil {
		panic(err)
	}

	client.Start()

	r := mux.NewRouter()
	r.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))
	r.HandleFunc("/", handleIndex)
	r.HandleFunc("/c0", handlec0)
	r.HandleFunc("/c1", handlec1)
	r.HandleFunc("/c2", handlec2)
	r.HandleFunc("/c3", handlec3)
	r.HandleFunc("/c4", handlec4)
	r.HandleFunc("/c5", handlec5)

	log.Fatal(http.ListenAndServe(":2020", r))
}

func handleIndex(w http.ResponseWriter, r *http.Request) {

	templates, err := template.ParseFiles(path.Join("templates", "main.html"))
	if err != nil {
		http.Error(w, "500 Internal Server Error, parsing", 500)
		fmt.Println(err.Error())
		return
	}
	templates.Execute(w, nil)
}

func handlec0(w http.ResponseWriter, r *http.Request) {

	payload := gmbh.NewPayload()
	payload.AppendStringField("xid", xid.New().String())
	result, err := client.MakeRequest("c0", "gatherData", payload)
	if err != nil {
		w.Write([]byte("could not contact; err=" + err.Error()))
	}
	if result.GetError() != "" {
		w.Write([]byte("Service error: " + result.GetError() + "\n"))
	} else {
		w.Write([]byte("c0 -> " + result.GetPayload().GetStringField("result") + "\n"))
	}
}

func handlec1(w http.ResponseWriter, r *http.Request) {
	payload := gmbh.NewPayload()
	payload.AppendStringField("xid", xid.New().String())
	result, err := client.MakeRequest("c1", "gatherData", payload)
	if err != nil {
		w.Write([]byte("could not contact; err=" + err.Error()))
	}
	if result.GetError() != "" {
		w.Write([]byte("Service error: " + result.GetError() + "\n"))
	} else {
		w.Write([]byte("c1 -> " + result.GetPayload().GetStringField("result") + "\n"))
	}
}
func handlec2(w http.ResponseWriter, r *http.Request) {
	payload := gmbh.NewPayload()
	payload.AppendStringField("xid", xid.New().String())
	result, err := client.MakeRequest("c2", "gatherData", payload)
	if err != nil {
		w.Write([]byte("could not contact; err=" + err.Error()))
	}
	if result.GetError() != "" {
		w.Write([]byte("Service error: " + result.GetError() + "\n"))
	} else {
		w.Write([]byte("c2 -> " + result.GetPayload().GetStringField("result") + "\n"))
	}
}
func handlec3(w http.ResponseWriter, r *http.Request) {
	payload := gmbh.NewPayload()
	payload.AppendStringField("xid", xid.New().String())
	result, err := client.MakeRequest("c3", "gatherData", payload)
	if err != nil {
		w.Write([]byte("could not contact; err=" + err.Error()))
	}
	if result.GetError() != "" {
		w.Write([]byte("Service error: " + result.GetError() + "\n"))
	} else {
		w.Write([]byte("c3 -> " + result.GetPayload().GetStringField("result") + "\n"))
	}
}
func handlec4(w http.ResponseWriter, r *http.Request) {
	payload := gmbh.NewPayload()
	payload.AppendStringField("xid", xid.New().String())
	result, err := client.MakeRequest("c4", "gatherData", payload)
	if err != nil {
		w.Write([]byte("could not contact; err=" + err.Error()))
	}
	if result.GetError() != "" {
		w.Write([]byte("Service error: " + result.GetError() + "\n"))
	} else {
		w.Write([]byte("c4 -> " + result.GetPayload().GetStringField("result") + "\n"))
	}
}
func handlec5(w http.ResponseWriter, r *http.Request) {
	payload := gmbh.NewPayload()
	payload.AppendStringField("xid", xid.New().String())
	result, err := client.MakeRequest("c5", "gatherData", payload)
	if err != nil {
		w.Write([]byte("could not contact; err=" + err.Error()))
	}
	if result.GetError() != "" {
		w.Write([]byte("Service error: " + result.GetError() + "\n"))
	} else {
		w.Write([]byte("c5 -> " + result.GetPayload().GetStringField("result") + "\n"))
	}
}
