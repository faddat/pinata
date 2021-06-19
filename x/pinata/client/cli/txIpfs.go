package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/jfkmlktrumpwtf/pinata/x/pinata/types"
)

func CmdCreateIpfs() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-ipfs [filename] [cid] [tags] [size] [paid]",
		Short: "Create a new ipfs",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsFilename := string(args[0])
			argsCid := string(args[1])
			argsTags := string(args[2])
			argsSize := string(args[3])
			argsPaid := string(args[4])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateIpfs(clientCtx.GetFromAddress().String(), string(argsFilename), string(argsCid), string(argsTags), string(argsSize), string(argsPaid))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateIpfs() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-ipfs [id] [filename] [cid] [tags] [size] [paid]",
		Short: "Update a ipfs",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsFilename := string(args[1])
			argsCid := string(args[2])
			argsTags := string(args[3])
			argsSize := string(args[4])
			argsPaid := string(args[5])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateIpfs(clientCtx.GetFromAddress().String(), id, string(argsFilename), string(argsCid), string(argsTags), string(argsSize), string(argsPaid))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteIpfs() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-ipfs [id] [filename] [cid] [tags] [size] [paid]",
		Short: "Delete a ipfs by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteIpfs(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
