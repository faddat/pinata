package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/jfkmlktrumpwtf/pinata/x/pinata/types"
)

func (k msgServer) CreateIpfs(goCtx context.Context, msg *types.MsgCreateIpfs) (*types.MsgCreateIpfsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var ipfs = types.Ipfs{
		Creator:  msg.Creator,
		Filename: msg.Filename,
		Cid:      msg.Cid,
		Tags:     msg.Tags,
		Weight:   msg.Weight,
		Paid:     msg.Paid,
	}

	id := k.AppendIpfs(
		ctx,
		ipfs,
	)

	return &types.MsgCreateIpfsResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateIpfs(goCtx context.Context, msg *types.MsgUpdateIpfs) (*types.MsgUpdateIpfsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var ipfs = types.Ipfs{
		Creator:  msg.Creator,
		Id:       msg.Id,
		Filename: msg.Filename,
		Cid:      msg.Cid,
		Tags:     msg.Tags,
		Weight:   msg.Weight,
		Paid:     msg.Paid,
	}

	// Checks that the element exists
	if !k.HasIpfs(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetIpfsOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetIpfs(ctx, ipfs)

	return &types.MsgUpdateIpfsResponse{}, nil
}

func (k msgServer) DeleteIpfs(goCtx context.Context, msg *types.MsgDeleteIpfs) (*types.MsgDeleteIpfsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasIpfs(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetIpfsOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveIpfs(ctx, msg.Id)

	return &types.MsgDeleteIpfsResponse{}, nil
}
