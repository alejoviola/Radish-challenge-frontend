import React, { useState, useContext } from 'react'
import { useContractWrite, usePrepareContractWrite, useAccount } from 'wagmi'
import { BigNumber } from 'ethers'
import { Pool_Contract } from '../../../web3/data/data'
import { ModalContext } from '../../../context/Modal/ModalContext'

const SupplyModal = () => {
  const { address: userAddress } = useAccount()
  const { token } = useContext(ModalContext)

  // Modal Logic
  const [amount, setAmount] = useState(0)

  // APPROVE TOKEN
  const { config } = usePrepareContractWrite({
    address: token.address,
    abi: [
      {
        inputs: [
          { internalType: 'string', name: 'name', type: 'string' },
          { internalType: 'string', name: 'symbol', type: 'string' },
          { internalType: 'uint8', name: 'decimals', type: 'uint8' },
          { internalType: 'address', name: 'owner', type: 'address' },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'Approval',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        inputs: [],
        name: 'DOMAIN_SEPARATOR',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'EIP712_REVISION',
        outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'PERMIT_TYPEHASH',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'owner', type: 'address' },
          { internalType: 'address', name: 'spender', type: 'address' },
        ],
        name: 'allowance',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'spender', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'approve',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'decimals',
        outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'spender', type: 'address' },
          { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' },
        ],
        name: 'decreaseAllowance',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'spender', type: 'address' },
          { internalType: 'uint256', name: 'addedValue', type: 'uint256' },
        ],
        name: 'increaseAllowance',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'account', type: 'address' },
          { internalType: 'uint256', name: 'value', type: 'uint256' },
        ],
        name: 'mint',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'value', type: 'uint256' }],
        name: 'mint',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'nonces',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'owner', type: 'address' },
          { internalType: 'address', name: 'spender', type: 'address' },
          { internalType: 'uint256', name: 'value', type: 'uint256' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
          { internalType: 'uint8', name: 'v', type: 'uint8' },
          { internalType: 'bytes32', name: 'r', type: 'bytes32' },
          { internalType: 'bytes32', name: 's', type: 'bytes32' },
        ],
        name: 'permit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'recipient', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'transfer',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'sender', type: 'address' },
          { internalType: 'address', name: 'recipient', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'transferFrom',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'newOwner', type: 'address' },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    functionName: 'approve',
    args: [Pool_Contract, BigNumber.from(10e14)],
  })
  const { data, write } = useContractWrite(config)

  // SUPPLY
  const { config: configSupply } = usePrepareContractWrite({
    address: Pool_Contract,
    abi: [
      {
        inputs: [
          {
            internalType: 'contract IPoolAddressesProvider',
            name: 'provider',
            type: 'address',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'reserve',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'backer',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'fee',
            type: 'uint256',
          },
        ],
        name: 'BackUnbacked',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'reserve',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'onBehalfOf',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'enum DataTypes.InterestRateMode',
            name: 'interestRateMode',
            type: 'uint8',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'borrowRate',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'uint16',
            name: 'referralCode',
            type: 'uint16',
          },
        ],
        name: 'Borrow',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'initiator',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'asset',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'enum DataTypes.InterestRateMode',
            name: 'interestRateMode',
            type: 'uint8',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'premium',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'uint16',
            name: 'referralCode',
            type: 'uint16',
          },
        ],
        name: 'FlashLoan',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'asset',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'totalDebt',
            type: 'uint256',
          },
        ],
        name: 'IsolationModeTotalDebtUpdated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralAsset',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'debtAsset',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'debtToCover',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'liquidatedCollateralAmount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'liquidator',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'receiveAToken',
            type: 'bool',
          },
        ],
        name: 'LiquidationCall',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'reserve',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'onBehalfOf',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'uint16',
            name: 'referralCode',
            type: 'uint16',
          },
        ],
        name: 'MintUnbacked',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'reserve',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amountMinted',
            type: 'uint256',
          },
        ],
        name: 'MintedToTreasury',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'reserve',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'RebalanceStableBorrowRate',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'reserve',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'repayer',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'useATokens',
            type: 'bool',
          },
        ],
        name: 'Repay',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'reserve',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'liquidityRate',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'stableBorrowRate',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'variableBorrowRate',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'liquidityIndex',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'variableBorrowIndex',
            type: 'uint256',
          },
        ],
        name: 'ReserveDataUpdated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'reserve',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'ReserveUsedAsCollateralDisabled',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'reserve',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'ReserveUsedAsCollateralEnabled',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'reserve',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'onBehalfOf',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'uint16',
            name: 'referralCode',
            type: 'uint16',
          },
        ],
        name: 'Supply',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'reserve',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'enum DataTypes.InterestRateMode',
            name: 'interestRateMode',
            type: 'uint8',
          },
        ],
        name: 'SwapBorrowRateMode',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint8',
            name: 'categoryId',
            type: 'uint8',
          },
        ],
        name: 'UserEModeSet',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'reserve',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'Withdraw',
        type: 'event',
      },
      {
        inputs: [],
        name: 'ADDRESSES_PROVIDER',
        outputs: [
          {
            internalType: 'contract IPoolAddressesProvider',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'BRIDGE_PROTOCOL_FEE',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'FLASHLOAN_PREMIUM_TOTAL',
        outputs: [{ internalType: 'uint128', name: '', type: 'uint128' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'FLASHLOAN_PREMIUM_TO_PROTOCOL',
        outputs: [{ internalType: 'uint128', name: '', type: 'uint128' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'MAX_NUMBER_RESERVES',
        outputs: [{ internalType: 'uint16', name: '', type: 'uint16' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'MAX_STABLE_RATE_BORROW_SIZE_PERCENT',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'POOL_REVISION',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'asset', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          { internalType: 'uint256', name: 'fee', type: 'uint256' },
        ],
        name: 'backUnbacked',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'asset', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'interestRateMode',
            type: 'uint256',
          },
          { internalType: 'uint16', name: 'referralCode', type: 'uint16' },
          { internalType: 'address', name: 'onBehalfOf', type: 'address' },
        ],
        name: 'borrow',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint8', name: 'id', type: 'uint8' },
          {
            components: [
              { internalType: 'uint16', name: 'ltv', type: 'uint16' },
              {
                internalType: 'uint16',
                name: 'liquidationThreshold',
                type: 'uint16',
              },
              {
                internalType: 'uint16',
                name: 'liquidationBonus',
                type: 'uint16',
              },
              { internalType: 'address', name: 'priceSource', type: 'address' },
              { internalType: 'string', name: 'label', type: 'string' },
            ],
            internalType: 'struct DataTypes.EModeCategory',
            name: 'category',
            type: 'tuple',
          },
        ],
        name: 'configureEModeCategory',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'asset', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          { internalType: 'address', name: 'onBehalfOf', type: 'address' },
          { internalType: 'uint16', name: 'referralCode', type: 'uint16' },
        ],
        name: 'deposit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'asset', type: 'address' }],
        name: 'dropReserve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'asset', type: 'address' },
          { internalType: 'address', name: 'from', type: 'address' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'balanceFromBefore',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'balanceToBefore', type: 'uint256' },
        ],
        name: 'finalizeTransfer',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'receiverAddress', type: 'address' },
          { internalType: 'address[]', name: 'assets', type: 'address[]' },
          { internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' },
          {
            internalType: 'uint256[]',
            name: 'interestRateModes',
            type: 'uint256[]',
          },
          { internalType: 'address', name: 'onBehalfOf', type: 'address' },
          { internalType: 'bytes', name: 'params', type: 'bytes' },
          { internalType: 'uint16', name: 'referralCode', type: 'uint16' },
        ],
        name: 'flashLoan',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'receiverAddress', type: 'address' },
          { internalType: 'address', name: 'asset', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          { internalType: 'bytes', name: 'params', type: 'bytes' },
          { internalType: 'uint16', name: 'referralCode', type: 'uint16' },
        ],
        name: 'flashLoanSimple',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'asset', type: 'address' }],
        name: 'getConfiguration',
        outputs: [
          {
            components: [
              { internalType: 'uint256', name: 'data', type: 'uint256' },
            ],
            internalType: 'struct DataTypes.ReserveConfigurationMap',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint8', name: 'id', type: 'uint8' }],
        name: 'getEModeCategoryData',
        outputs: [
          {
            components: [
              { internalType: 'uint16', name: 'ltv', type: 'uint16' },
              {
                internalType: 'uint16',
                name: 'liquidationThreshold',
                type: 'uint16',
              },
              {
                internalType: 'uint16',
                name: 'liquidationBonus',
                type: 'uint16',
              },
              { internalType: 'address', name: 'priceSource', type: 'address' },
              { internalType: 'string', name: 'label', type: 'string' },
            ],
            internalType: 'struct DataTypes.EModeCategory',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint16', name: 'id', type: 'uint16' }],
        name: 'getReserveAddressById',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'asset', type: 'address' }],
        name: 'getReserveData',
        outputs: [
          {
            components: [
              {
                components: [
                  { internalType: 'uint256', name: 'data', type: 'uint256' },
                ],
                internalType: 'struct DataTypes.ReserveConfigurationMap',
                name: 'configuration',
                type: 'tuple',
              },
              {
                internalType: 'uint128',
                name: 'liquidityIndex',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'currentLiquidityRate',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'variableBorrowIndex',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'currentVariableBorrowRate',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'currentStableBorrowRate',
                type: 'uint128',
              },
              {
                internalType: 'uint40',
                name: 'lastUpdateTimestamp',
                type: 'uint40',
              },
              { internalType: 'uint16', name: 'id', type: 'uint16' },
              {
                internalType: 'address',
                name: 'aTokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'stableDebtTokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'variableDebtTokenAddress',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'interestRateStrategyAddress',
                type: 'address',
              },
              {
                internalType: 'uint128',
                name: 'accruedToTreasury',
                type: 'uint128',
              },
              { internalType: 'uint128', name: 'unbacked', type: 'uint128' },
              {
                internalType: 'uint128',
                name: 'isolationModeTotalDebt',
                type: 'uint128',
              },
            ],
            internalType: 'struct DataTypes.ReserveData',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'asset', type: 'address' }],
        name: 'getReserveNormalizedIncome',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'asset', type: 'address' }],
        name: 'getReserveNormalizedVariableDebt',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getReservesList',
        outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
        name: 'getUserAccountData',
        outputs: [
          {
            internalType: 'uint256',
            name: 'totalCollateralBase',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'totalDebtBase', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'availableBorrowsBase',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'currentLiquidationThreshold',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'ltv', type: 'uint256' },
          { internalType: 'uint256', name: 'healthFactor', type: 'uint256' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
        name: 'getUserConfiguration',
        outputs: [
          {
            components: [
              { internalType: 'uint256', name: 'data', type: 'uint256' },
            ],
            internalType: 'struct DataTypes.UserConfigurationMap',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
        name: 'getUserEMode',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'asset', type: 'address' },
          { internalType: 'address', name: 'aTokenAddress', type: 'address' },
          {
            internalType: 'address',
            name: 'stableDebtAddress',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'variableDebtAddress',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'interestRateStrategyAddress',
            type: 'address',
          },
        ],
        name: 'initReserve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'contract IPoolAddressesProvider',
            name: 'provider',
            type: 'address',
          },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'collateralAsset', type: 'address' },
          { internalType: 'address', name: 'debtAsset', type: 'address' },
          { internalType: 'address', name: 'user', type: 'address' },
          { internalType: 'uint256', name: 'debtToCover', type: 'uint256' },
          { internalType: 'bool', name: 'receiveAToken', type: 'bool' },
        ],
        name: 'liquidationCall',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address[]', name: 'assets', type: 'address[]' },
        ],
        name: 'mintToTreasury',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'asset', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          { internalType: 'address', name: 'onBehalfOf', type: 'address' },
          { internalType: 'uint16', name: 'referralCode', type: 'uint16' },
        ],
        name: 'mintUnbacked',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'asset', type: 'address' },
          { internalType: 'address', name: 'user', type: 'address' },
        ],
        name: 'rebalanceStableBorrowRate',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'asset', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'interestRateMode',
            type: 'uint256',
          },
          { internalType: 'address', name: 'onBehalfOf', type: 'address' },
        ],
        name: 'repay',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'asset', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'interestRateMode',
            type: 'uint256',
          },
        ],
        name: 'repayWithATokens',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'asset', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'interestRateMode',
            type: 'uint256',
          },
          { internalType: 'address', name: 'onBehalfOf', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
          { internalType: 'uint8', name: 'permitV', type: 'uint8' },
          { internalType: 'bytes32', name: 'permitR', type: 'bytes32' },
          { internalType: 'bytes32', name: 'permitS', type: 'bytes32' },
        ],
        name: 'repayWithPermit',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'token', type: 'address' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'rescueTokens',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'asset', type: 'address' }],
        name: 'resetIsolationModeTotalDebt',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'asset', type: 'address' },
          {
            components: [
              { internalType: 'uint256', name: 'data', type: 'uint256' },
            ],
            internalType: 'struct DataTypes.ReserveConfigurationMap',
            name: 'configuration',
            type: 'tuple',
          },
        ],
        name: 'setConfiguration',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'asset', type: 'address' },
          {
            internalType: 'address',
            name: 'rateStrategyAddress',
            type: 'address',
          },
        ],
        name: 'setReserveInterestRateStrategyAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint8', name: 'categoryId', type: 'uint8' }],
        name: 'setUserEMode',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'asset', type: 'address' },
          { internalType: 'bool', name: 'useAsCollateral', type: 'bool' },
        ],
        name: 'setUserUseReserveAsCollateral',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'asset', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          { internalType: 'address', name: 'onBehalfOf', type: 'address' },
          { internalType: 'uint16', name: 'referralCode', type: 'uint16' },
        ],
        name: 'supply',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'asset', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          { internalType: 'address', name: 'onBehalfOf', type: 'address' },
          { internalType: 'uint16', name: 'referralCode', type: 'uint16' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
          { internalType: 'uint8', name: 'permitV', type: 'uint8' },
          { internalType: 'bytes32', name: 'permitR', type: 'bytes32' },
          { internalType: 'bytes32', name: 'permitS', type: 'bytes32' },
        ],
        name: 'supplyWithPermit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'asset', type: 'address' },
          {
            internalType: 'uint256',
            name: 'interestRateMode',
            type: 'uint256',
          },
        ],
        name: 'swapBorrowRateMode',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'protocolFee', type: 'uint256' },
        ],
        name: 'updateBridgeProtocolFee',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'flashLoanPremiumTotal',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'flashLoanPremiumToProtocol',
            type: 'uint128',
          },
        ],
        name: 'updateFlashloanPremiums',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'asset', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          { internalType: 'address', name: 'to', type: 'address' },
        ],
        name: 'withdraw',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    functionName: 'supply',
    args: [
      token.address,
      BigNumber.from((amount * 10e17).toString()),
      userAddress as `0x${string}`,
      0,
    ],
  })

  const { data: dataSupply, write: writeSupply } =
    useContractWrite(configSupply)

  return (
    <div>
      <form>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          Amount
        </label>
        <input
          type='number'
          onChange={(e) => {
            setAmount(Number(e.target.value))
          }}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
      </form>

      <div className='flex flex-col justify-center mt-5'>
        <button
          onClick={() => {
            write?.()
          }}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mb-2 px-4 rounded'
        >
          Approve
        </button>

        <button
          onClick={() => {
            writeSupply?.()
          }}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Supply
        </button>
      </div>
    </div>
  )
}

export default SupplyModal