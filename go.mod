module github.com/jfkmlktrumpwtf/pinata

go 1.15

require (
	berty.tech/ipfs-webui-packed v1.0.0-v2.11.4-1
	github.com/cosmos/cosmos-sdk v0.42.1
	github.com/gogo/protobuf v1.3.3
	github.com/golang/protobuf v1.5.2
	github.com/gorilla/mux v1.8.0
	github.com/grpc-ecosystem/grpc-gateway v1.16.0
	github.com/ipfs/go-ipfs v0.8.0
	github.com/ipfs/go-ipfs-config v0.13.0
	github.com/ipfs/go-ipfs-files v0.0.8
	github.com/ipfs/interface-go-ipfs-core v0.4.0
	github.com/libp2p/go-libp2p-core v0.8.5
	github.com/libp2p/go-libp2p-peerstore v0.2.7
	github.com/multiformats/go-multiaddr v0.3.1
	github.com/spf13/cast v1.3.1
	github.com/spf13/cobra v1.1.1
	github.com/spf13/pflag v1.0.5
	github.com/stretchr/testify v1.7.0
	github.com/tendermint/tendermint v0.34.8
	github.com/tendermint/tm-db v0.6.4
	go.opencensus.io v0.22.6 // indirect
	go.uber.org/multierr v1.6.0 // indirect
	google.golang.org/genproto v0.0.0-20210426193834-eac7f76ac494
	google.golang.org/grpc v1.37.0
	gopkg.in/yaml.v3 v3.0.0-20210107192922-496545a6307b // indirect
	honnef.co/go/tools v0.0.1-2020.1.4 // indirect
)

replace google.golang.org/grpc => google.golang.org/grpc v1.33.2

replace github.com/gogo/protobuf => github.com/regen-network/protobuf v1.3.3-alpha.regen.1
