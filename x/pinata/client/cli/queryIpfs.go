package cli

import (
	"context"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/jfkmlktrumpwtf/pinata/x/pinata/types"
	"github.com/spf13/cobra"
)

func CmdListIpfs() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-ipfs",
		Short: "list all ipfs",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllIpfsRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.IpfsAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowIpfs() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-ipfs [id]",
		Short: "shows a ipfs",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetIpfsRequest{
				Id: id,
			}

			res, err := queryClient.Ipfs(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
