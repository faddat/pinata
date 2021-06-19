package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateIpfs{}

func NewMsgCreateIpfs(creator string, filename string, cid string, tags string, weight string, paid string) *MsgCreateIpfs {
	return &MsgCreateIpfs{
		Creator:  creator,
		Filename: filename,
		Cid:      cid,
		Tags:     tags,
		Weight:   weight,
		Paid:     paid,
	}
}

func (msg *MsgCreateIpfs) Route() string {
	return RouterKey
}

func (msg *MsgCreateIpfs) Type() string {
	return "CreateIpfs"
}

func (msg *MsgCreateIpfs) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateIpfs) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateIpfs) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateIpfs{}

func NewMsgUpdateIpfs(creator string, id uint64, filename string, cid string, tags string, weight string, paid string) *MsgUpdateIpfs {
	return &MsgUpdateIpfs{
		Id:       id,
		Creator:  creator,
		Filename: filename,
		Cid:      cid,
		Tags:     tags,
		Weight:   weight,
		Paid:     paid,
	}
}

func (msg *MsgUpdateIpfs) Route() string {
	return RouterKey
}

func (msg *MsgUpdateIpfs) Type() string {
	return "UpdateIpfs"
}

func (msg *MsgUpdateIpfs) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateIpfs) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateIpfs) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteIpfs{}

func NewMsgDeleteIpfs(creator string, id uint64) *MsgDeleteIpfs {
	return &MsgDeleteIpfs{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteIpfs) Route() string {
	return RouterKey
}

func (msg *MsgDeleteIpfs) Type() string {
	return "DeleteIpfs"
}

func (msg *MsgDeleteIpfs) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteIpfs) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteIpfs) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
