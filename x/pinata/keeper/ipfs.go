package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/jfkmlktrumpwtf/pinata/x/pinata/types"
	"strconv"
)

// GetIpfsCount get the total number of ipfs
func (k Keeper) GetIpfsCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.IpfsCountKey))
	byteKey := types.KeyPrefix(types.IpfsCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetIpfsCount set the total number of ipfs
func (k Keeper) SetIpfsCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.IpfsCountKey))
	byteKey := types.KeyPrefix(types.IpfsCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendIpfs appends a ipfs in the store with a new id and update the count
func (k Keeper) AppendIpfs(
	ctx sdk.Context,
	ipfs types.Ipfs,
) uint64 {
	// Create the ipfs
	count := k.GetIpfsCount(ctx)

	// Set the ID of the appended value
	ipfs.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.IpfsKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&ipfs)
	store.Set(GetIpfsIDBytes(ipfs.Id), appendedValue)

	// Update ipfs count
	k.SetIpfsCount(ctx, count+1)

	return count
}

// SetIpfs set a specific ipfs in the store
func (k Keeper) SetIpfs(ctx sdk.Context, ipfs types.Ipfs) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.IpfsKey))
	b := k.cdc.MustMarshalBinaryBare(&ipfs)
	store.Set(GetIpfsIDBytes(ipfs.Id), b)
}

// GetIpfs returns a ipfs from its id
func (k Keeper) GetIpfs(ctx sdk.Context, id uint64) types.Ipfs {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.IpfsKey))
	var ipfs types.Ipfs
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetIpfsIDBytes(id)), &ipfs)
	return ipfs
}

// HasIpfs checks if the ipfs exists in the store
func (k Keeper) HasIpfs(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.IpfsKey))
	return store.Has(GetIpfsIDBytes(id))
}

// GetIpfsOwner returns the creator of the ipfs
func (k Keeper) GetIpfsOwner(ctx sdk.Context, id uint64) string {
	return k.GetIpfs(ctx, id).Creator
}

// RemoveIpfs removes a ipfs from the store
func (k Keeper) RemoveIpfs(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.IpfsKey))
	store.Delete(GetIpfsIDBytes(id))
}

// GetAllIpfs returns all ipfs
func (k Keeper) GetAllIpfs(ctx sdk.Context) (list []types.Ipfs) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.IpfsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Ipfs
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetIpfsIDBytes returns the byte representation of the ID
func GetIpfsIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetIpfsIDFromBytes returns ID in uint64 format from a byte array
func GetIpfsIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
