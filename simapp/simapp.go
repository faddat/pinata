package simapp

import (
	"time"

	"github.com/cosmos/cosmos-sdk/std"
	abci "github.com/tendermint/tendermint/abci/types"
	"github.com/tendermint/tendermint/libs/log"
	tmproto "github.com/tendermint/tendermint/proto/tendermint/types"
	tmtypes "github.com/tendermint/tendermint/types"
	tmdb "github.com/tendermint/tm-db"

	"github.com/jfkmlktrumpwtf/pinata/app"
	"github.com/jfkmlktrumpwtf/pinata/app/params"
)

// NewSimApp creates application instance with in-memory database and disabled logging.
func NewSimApp(dir string) *app.App {
	db := tmdb.NewMemDB()
	logger := log.NewNopLogger()

	encoding := params.MakeEncodingConfig()
	std.RegisterLegacyAminoCodec(encoding.Amino)
	std.RegisterInterfaces(encoding.InterfaceRegistry)
	app.ModuleBasics.RegisterLegacyAminoCodec(encoding.Amino)
	app.ModuleBasics.RegisterInterfaces(encoding.InterfaceRegistry)

	a := app.New(logger, db, nil, true, map[int64]bool{}, dir, 0, encoding,
		// this line is used by starport scaffolding # stargate/simapp/appArgument
		emptyOptions{})
	// InitChain updates deliverState which is required when app.NewContext is called
	a.InitChain(abci.RequestInitChain{
		ConsensusParams: defaultConsensusParams,
		AppStateBytes:   []byte("{}"),
	})
	return a
}

type emptyOptions struct{}

func (ao emptyOptions) Get(o string) interface{} {
	return nil
}

var defaultConsensusParams = &abci.ConsensusParams{
	Block: &abci.BlockParams{
		MaxBytes: 200000,
		MaxGas:   2000000,
	},
	Evidence: &tmproto.EvidenceParams{
		MaxAgeNumBlocks: 302400,
		MaxAgeDuration:  504 * time.Hour, // 3 weeks is the max duration
		MaxBytes:        10000,
	},
	Validator: &tmproto.ValidatorParams{
		PubKeyTypes: []string{
			tmtypes.ABCIPubKeyTypeEd25519,
		},
	},
}
