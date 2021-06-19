package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/jfkmlktrumpwtf/pinata/x/pinata/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) IpfsAll(c context.Context, req *types.QueryAllIpfsRequest) (*types.QueryAllIpfsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var ipfss []*types.Ipfs
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	ipfsStore := prefix.NewStore(store, types.KeyPrefix(types.IpfsKey))

	pageRes, err := query.Paginate(ipfsStore, req.Pagination, func(key []byte, value []byte) error {
		var ipfs types.Ipfs
		if err := k.cdc.UnmarshalBinaryBare(value, &ipfs); err != nil {
			return err
		}

		ipfss = append(ipfss, &ipfs)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllIpfsResponse{Ipfs: ipfss, Pagination: pageRes}, nil
}

func (k Keeper) Ipfs(c context.Context, req *types.QueryGetIpfsRequest) (*types.QueryGetIpfsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var ipfs types.Ipfs
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasIpfs(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.IpfsKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetIpfsIDBytes(req.Id)), &ipfs)

	return &types.QueryGetIpfsResponse{Ipfs: &ipfs}, nil
}
