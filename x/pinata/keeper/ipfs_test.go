package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/jfkmlktrumpwtf/pinata/x/pinata/types"
	"github.com/stretchr/testify/assert"
)

func createNIpfs(keeper *Keeper, ctx sdk.Context, n int) []types.Ipfs {
	items := make([]types.Ipfs, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendIpfs(ctx, items[i])
	}
	return items
}

func TestIpfsGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNIpfs(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetIpfs(ctx, item.Id))
	}
}

func TestIpfsExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNIpfs(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasIpfs(ctx, item.Id))
	}
}

func TestIpfsRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNIpfs(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveIpfs(ctx, item.Id)
		assert.False(t, keeper.HasIpfs(ctx, item.Id))
	}
}

func TestIpfsGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNIpfs(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllIpfs(ctx))
}

func TestIpfsCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNIpfs(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetIpfsCount(ctx))
}
