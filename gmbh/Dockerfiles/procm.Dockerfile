FROM golang:1.11-alpine


RUN apk add wget supervisor curl git mercurial make

## Install Deps
RUN go get github.com/golang/protobuf/proto \
    && go get github.com/golang/protobuf/protoc-gen-go  \
    && go get google.golang.org/grpc \
    && go get github.com/fatih/color \
    && go get github.com/BurntSushi/toml \
    && go get github.com/rs/xid


ENV SRCDIR=/build/gmbh
RUN mkdir -p $SRCDIR

WORKDIR $SRCDIR

ARG CACHEBUST=1

RUN git clone https://github.com/gmbh-micro/gmbh.git \ 
    && cd gmbh \
    && git checkout containerBuild \
    && git fetch \
    && mkdir -p $GOPATH"/src/github.com/gmbh-micro" \ 
    && cp -a ./internal/* $GOPATH"/src/github.com/gmbh-micro"/ 

WORKDIR $SRCDIR/gmbh

RUN go build -v -o ./bin/gmbh ./cmd/gmbh/*.go \
    && go build -v -o ./bin/gmbhCore ./cmd/gmbhCore/*.go \
    && go build -v -o ./bin/gmbhProcm ./cmd/gmbhProcm/*.go \
    && cp ./bin/gmbh* $GOPATH/bin

WORKDIR /

EXPOSE 59500

CMD ["gmbhProcm"]