package pinata

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/jfkmlktrumpwtf/pinata/x/pinata/keeper"
	"github.com/jfkmlktrumpwtf/pinata/x/pinata/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the ipfs
	for _, elem := range genState.IpfsList {
		k.SetIpfs(ctx, *elem)
	}

	// Set ipfs count
	k.SetIpfsCount(ctx, genState.IpfsCount)

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all ipfs
	ipfsList := k.GetAllIpfs(ctx)
	for _, elem := range ipfsList {
		elem := elem
		genesis.IpfsList = append(genesis.IpfsList, &elem)
	}

	// Set the current count
	genesis.IpfsCount = k.GetIpfsCount(ctx)

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}
