module github.com/jfkmlktrumpwtf/pinata

go 1.15

require (
	berty.tech/ipfs-webui-packed v1.0.0-v2.11.4-1
	github.com/cosmos/cosmos-sdk v0.42.1
	github.com/gogo/protobuf v1.3.3
	github.com/golang/protobuf v1.5.2
	github.com/gopherjs/gopherjs v0.0.0-20190812055157-5d271430af9f // indirect
	github.com/gorilla/mux v1.8.0
	github.com/grpc-ecosystem/grpc-gateway v1.16.0
	github.com/ipfs/go-ipfs v0.13.1
	github.com/ipfs/go-ipfs-config v0.13.0
	github.com/ipfs/go-ipfs-files v0.1.1
	github.com/ipfs/interface-go-ipfs-core v0.7.0
	github.com/libp2p/go-libp2p-core v0.15.1
	github.com/libp2p/go-libp2p-peerstore v0.6.0
	github.com/multiformats/go-multiaddr v0.5.0
	github.com/smartystreets/assertions v1.0.1 // indirect
	github.com/spf13/cast v1.3.1
	github.com/spf13/cobra v1.1.1
	github.com/spf13/pflag v1.0.5
	github.com/stretchr/testify v1.7.1
	github.com/tendermint/tendermint v0.34.8
	github.com/tendermint/tm-db v0.6.4
	golang.org/x/lint v0.0.0-20201208152925-83fdc39ff7b5 // indirect
	google.golang.org/genproto v0.0.0-20211118181313-81c1377c94b1
	google.golang.org/grpc v1.46.0
)

replace google.golang.org/grpc => google.golang.org/grpc v1.33.2

replace github.com/gogo/protobuf => github.com/regen-network/protobuf v1.3.3-alpha.regen.1
