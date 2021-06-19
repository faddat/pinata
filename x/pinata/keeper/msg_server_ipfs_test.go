package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/jfkmlktrumpwtf/pinata/x/pinata/types"
)

func TestIpfsMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateIpfs(ctx, &types.MsgCreateIpfs{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestIpfsMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateIpfs
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateIpfs{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateIpfs{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateIpfs{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateIpfs(ctx, &types.MsgCreateIpfs{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateIpfs(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestIpfsMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteIpfs
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteIpfs{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteIpfs{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteIpfs{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateIpfs(ctx, &types.MsgCreateIpfs{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteIpfs(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
