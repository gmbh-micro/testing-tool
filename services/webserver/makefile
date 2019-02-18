# Go parameters
GOCMD=go
GOBUILD=$(GOCMD) build
GOCLEAN=$(GOCMD) clean
GOTEST=$(GOCMD) test
GOGET=$(GOCMD) get
BINARY_NAME=ws

all: deps build
build: 
	$(GOBUILD) -o ./$(BINARY_NAME) ./
clean: 
	rm -f ./$(BINARY_NAME)

deps:
	$(GOGET) github.com/gorilla/mux
	$(GOGET) github.com/rs/xid