# Go parameters
GOCMD=go
GOBUILD=$(GOCMD) build
GOCLEAN=$(GOCMD) clean
GOTEST=$(GOCMD) test
GOGET=$(GOCMD) get
BINARY_NAME=c3

all: deps build
build: 
	$(GOBUILD) -o ./$(BINARY_NAME) ./
clean: 
	rm -f ./$(BINARY_NAME)

deps:
	# $(GOGET) github.com/markbates/goth