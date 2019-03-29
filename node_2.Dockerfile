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
ENV SERVICEDIR=/services
RUN mkdir -p $SRCDIR; mkdir -p $SERVICEDIR 

WORKDIR $SRCDIR

ARG CACHEBUST=1

RUN git clone https://github.com/gmbh-micro/gmbh.git \ 
    && cd gmbh \
    && git checkout containerBuild \
    && git fetch \
    && mkdir -p $GOPATH"/src/github.com/gmbh-micro" \ 
    && cp -a ./internal/* $GOPATH"/src/github.com/gmbh-micro"/ \
    && cp -a ./pkg/* $GOPATH"/src/github.com/gmbh-micro"/


WORKDIR $SERVICEDIR

ADD ./services/webserver/ ./webserver
ADD ./services/c3 ./c3
ADD ./services/c4 ./c4
RUN ls
RUN cd ./webserver; make; cd ../c3; make; cd ../c4; make

WORKDIR $SRCDIR/gmbh

# RUN go build -v -o ./bin/gmbh ./cmd/gmbh/*.go \
    # && go build -v -o ./bin/gmbhCore ./cmd/gmbhCore/*.go \
RUN go build -v -o ./bin/gmbhProcm ./cmd/gmbhProcm/*.go \
    && cp ./bin/gmbh* $GOPATH/bin

WORKDIR /

ADD ./gmbh/node_2.toml ./
# ADD ./ttool.toml ./


EXPOSE 49500

CMD ["gmbhProcm", "--remote", "--config=./node_2.toml", "--verbose"]
# CMD ["gmbhProcm", "--remote", "--verbose"]