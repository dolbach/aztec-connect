/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../common.js';
import type { ERC4626Bridge, ERC4626BridgeInterface } from '../ERC4626Bridge.js';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_rollupProcessor',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'AsyncDisabled',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidAuxData',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidCaller',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MissingImplementation',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ROLLUP_PROCESSOR',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'SUBSIDY',
    outputs: [
      {
        internalType: 'contract ISubsidy',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'WETH',
    outputs: [
      {
        internalType: 'contract IWETH',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'erc20Address',
            type: 'address',
          },
          {
            internalType: 'enum AztecTypes.AztecAssetType',
            name: 'assetType',
            type: 'uint8',
          },
        ],
        internalType: 'struct AztecTypes.AztecAsset',
        name: '_inputAssetA',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'erc20Address',
            type: 'address',
          },
          {
            internalType: 'enum AztecTypes.AztecAssetType',
            name: 'assetType',
            type: 'uint8',
          },
        ],
        internalType: 'struct AztecTypes.AztecAsset',
        name: '',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'erc20Address',
            type: 'address',
          },
          {
            internalType: 'enum AztecTypes.AztecAssetType',
            name: 'assetType',
            type: 'uint8',
          },
        ],
        internalType: 'struct AztecTypes.AztecAsset',
        name: '_outputAssetA',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'erc20Address',
            type: 'address',
          },
          {
            internalType: 'enum AztecTypes.AztecAssetType',
            name: 'assetType',
            type: 'uint8',
          },
        ],
        internalType: 'struct AztecTypes.AztecAsset',
        name: '',
        type: 'tuple',
      },
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    name: 'computeCriteria',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'erc20Address',
            type: 'address',
          },
          {
            internalType: 'enum AztecTypes.AztecAssetType',
            name: 'assetType',
            type: 'uint8',
          },
        ],
        internalType: 'struct AztecTypes.AztecAsset',
        name: '_inputAssetA',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'erc20Address',
            type: 'address',
          },
          {
            internalType: 'enum AztecTypes.AztecAssetType',
            name: 'assetType',
            type: 'uint8',
          },
        ],
        internalType: 'struct AztecTypes.AztecAsset',
        name: '',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'erc20Address',
            type: 'address',
          },
          {
            internalType: 'enum AztecTypes.AztecAssetType',
            name: 'assetType',
            type: 'uint8',
          },
        ],
        internalType: 'struct AztecTypes.AztecAsset',
        name: '_outputAssetA',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'erc20Address',
            type: 'address',
          },
          {
            internalType: 'enum AztecTypes.AztecAssetType',
            name: 'assetType',
            type: 'uint8',
          },
        ],
        internalType: 'struct AztecTypes.AztecAsset',
        name: '',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: '_totalInputValue',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_interactionNonce',
        type: 'uint256',
      },
      {
        internalType: 'uint64',
        name: '_auxData',
        type: 'uint64',
      },
      {
        internalType: 'address',
        name: '_rollupBeneficiary',
        type: 'address',
      },
    ],
    name: 'convert',
    outputs: [
      {
        internalType: 'uint256',
        name: 'outputValueA',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'erc20Address',
            type: 'address',
          },
          {
            internalType: 'enum AztecTypes.AztecAssetType',
            name: 'assetType',
            type: 'uint8',
          },
        ],
        internalType: 'struct AztecTypes.AztecAsset',
        name: '',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'erc20Address',
            type: 'address',
          },
          {
            internalType: 'enum AztecTypes.AztecAssetType',
            name: 'assetType',
            type: 'uint8',
          },
        ],
        internalType: 'struct AztecTypes.AztecAsset',
        name: '',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'erc20Address',
            type: 'address',
          },
          {
            internalType: 'enum AztecTypes.AztecAssetType',
            name: 'assetType',
            type: 'uint8',
          },
        ],
        internalType: 'struct AztecTypes.AztecAsset',
        name: '',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'erc20Address',
            type: 'address',
          },
          {
            internalType: 'enum AztecTypes.AztecAssetType',
            name: 'assetType',
            type: 'uint8',
          },
        ],
        internalType: 'struct AztecTypes.AztecAsset',
        name: '',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    name: 'finalise',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_vault',
        type: 'address',
      },
    ],
    name: 'listVault',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
];

const _bytecode =
  '0x60a060405234801561001057600080fd5b506040516116e33803806116e383398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b6080516116356100ae6000396000818161014f015281816101dd0152818161056d0152818161086e015281816108b0015261093201526116356000f3fe6080604052600436106100745760003560e01c8063ad5c46481161004e578063ad5c464814610115578063ae9467b51461013d578063c6eecb5214610171578063dbeacd541461019357600080fd5b806326c3b515146100805780636508156e146100b55780639b07d3421461010257600080fd5b3661007b57005b600080fd5b61009361008e36600461124d565b6101c1565b6040805193845260208401929092521515908201526060015b60405180910390f35b3480156100c157600080fd5b506100dd73abc30e831b5cc173a9ed5941714a7845c909e7fa81565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ac565b6100936101103660046112e3565b610745565b34801561012157600080fd5b506100dd73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc281565b34801561014957600080fd5b506100dd7f000000000000000000000000000000000000000000000000000000000000000081565b34801561017d57600080fd5b5061019161018c366004611358565b61077c565b005b34801561019f57600080fd5b506101b36101ae36600461137c565b610c6d565b6040519081526020016100ac565b600080803373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610234576040517f48f5c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061024660408d0160208e01611358565b9050600061025a60408c0160208d01611358565b905067ffffffffffffffff87166103d45760018d60400160208101906102809190611417565b6003811115610291576102916113e8565b14156103245773c02aaa39b223fe8d0a0e5c4f27ead9083c756cc273ffffffffffffffffffffffffffffffffffffffff1663d0e30db08a6040518263ffffffff1660e01b81526004016000604051808303818588803b1580156102f357600080fd5b505af1158015610307573d6000803e3d6000fd5b505050505073c02aaa39b223fe8d0a0e5c4f27ead9083c756cc291505b61033460408c0160208d01611358565b6040517f6e553f65000000000000000000000000000000000000000000000000000000008152600481018b905230602482015273ffffffffffffffffffffffffffffffffffffffff9190911690636e553f65906044016020604051808303816000875af11580156103a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103cd9190611438565b9450610631565b8667ffffffffffffffff16600114156105ff576103f760408e0160208f01611358565b6040517fba087652000000000000000000000000000000000000000000000000000000008152600481018b90523060248201819052604482015273ffffffffffffffffffffffffffffffffffffffff919091169063ba087652906064016020604051808303816000875af1158015610473573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104979190611438565b945060016104ab60608d0160408e01611417565b60038111156104bc576104bc6113e8565b14156105fa576040517f2e1a7d4d0000000000000000000000000000000000000000000000000000000081526004810186905273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc290632e1a7d4d90602401600060405180830381600087803b15801561052857600080fd5b505af115801561053c573d6000803e3d6000fd5b50506040517f12a53623000000000000000000000000000000000000000000000000000000008152600481018b90527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1692506312a53623915087906024016000604051808303818588803b1580156105c957600080fd5b505af11580156105dd573d6000803e3d6000fd5b505050505073c02aaa39b223fe8d0a0e5c4f27ead9083c756cc290505b610631565b6040517fdbb791da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60408051606084811b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000009081166020808501919091529185901b16603483015282516028818403018152604883018085528151918301919091207f0d3b205200000000000000000000000000000000000000000000000000000000909152604c83015273ffffffffffffffffffffffffffffffffffffffff8916606c830152915173abc30e831b5cc173a9ed5941714a7845c909e7fa92630d3b205292608c808201939182900301816000875af1158015610710573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107349190611438565b505050985098509895505050505050565b60008060006040517f26d18eab00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008173ffffffffffffffffffffffffffffffffffffffff166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ed9190611451565b905061081173ffffffffffffffffffffffffffffffffffffffff8216836000610d18565b61085273ffffffffffffffffffffffffffffffffffffffff8216837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610d18565b61089473ffffffffffffffffffffffffffffffffffffffff82167f00000000000000000000000000000000000000000000000000000000000000006000610d18565b6108f573ffffffffffffffffffffffffffffffffffffffff82167f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610d18565b6040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602483015283169063095ea7b3906044016020604051808303816000875af11580156109a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109cd919061146e565b50604080516002808252606082018352600092602083019080368337505060408051600280825260608201835293945060009390925090602083019080368337505060408051600280825260608201835293945060009390925090602083019080368337505060408051606088811b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000908116602080850191909152918b901b1660348301528251602881840301815260489092019092528051910120919250610a949050565b83600081518110610aa757610aa7611490565b602090810291909101810191909152604080517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606089811b82168386015288901b166034820152815180820360280181526048909101909152805191012083600181518110610b1957610b19611490565b60200260200101818152505062030d4082600081518110610b3c57610b3c611490565b602002602001019063ffffffff16908163ffffffff168152505062030d4082600181518110610b6d57610b6d611490565b602002602001019063ffffffff16908163ffffffff1681525050604681600081518110610b9c57610b9c611490565b602002602001019063ffffffff16908163ffffffff1681525050604681600181518110610bcb57610bcb611490565b63ffffffff909216602092830291909101909101526040517f71b08c2600000000000000000000000000000000000000000000000000000000815273abc30e831b5cc173a9ed5941714a7845c909e7fa906371b08c2690610c3490869086908690600401611500565b600060405180830381600087803b158015610c4e57600080fd5b505af1158015610c62573d6000803e3d6000fd5b505050505050505050565b6000610d0e610c826040880160208901611358565b610c926040870160208801611358565b6040517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606084811b8216602084015283901b166034820152600090604801604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905280516020909101209392505050565b9695505050505050565b801580610db857506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610d92573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db69190611438565b155b610e49576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084015b60405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052610ed6908490610edb565b505050565b6000610f3d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610fe79092919063ffffffff16565b805190915015610ed65780806020019051810190610f5b919061146e565b610ed6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610e40565b6060610ff68484600085610ffe565b949350505050565b606082471015611090576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610e40565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516110b99190611592565b60006040518083038185875af1925050503d80600081146110f6576040519150601f19603f3d011682016040523d82523d6000602084013e6110fb565b606091505b509150915061110c87838387611117565b979650505050505050565b606083156111aa5782516111a35773ffffffffffffffffffffffffffffffffffffffff85163b6111a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610e40565b5081610ff6565b610ff683838151156111bf5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4091906115ae565b60006060828403121561120557600080fd5b50919050565b803567ffffffffffffffff8116811461122357600080fd5b919050565b73ffffffffffffffffffffffffffffffffffffffff8116811461124a57600080fd5b50565b600080600080600080600080610200898b03121561126a57600080fd5b6112748a8a6111f3565b97506112838a60608b016111f3565b96506112928a60c08b016111f3565b95506112a28a6101208b016111f3565b945061018089013593506101a089013592506112c16101c08a0161120b565b91506101e08901356112d281611228565b809150509295985092959890939650565b6000806000806000806101c087890312156112fd57600080fd5b61130788886111f3565b955061131688606089016111f3565b94506113258860c089016111f3565b93506113358861012089016111f3565b9250610180870135915061134c6101a0880161120b565b90509295509295509295565b60006020828403121561136a57600080fd5b813561137581611228565b9392505050565b60008060008060006101a0868803121561139557600080fd5b61139f87876111f3565b94506113ae87606088016111f3565b93506113bd8760c088016111f3565b92506113cd8761012088016111f3565b91506113dc610180870161120b565b90509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60006020828403121561142957600080fd5b81356004811061137557600080fd5b60006020828403121561144a57600080fd5b5051919050565b60006020828403121561146357600080fd5b815161137581611228565b60006020828403121561148057600080fd5b8151801515811461137557600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081518084526020808501945080840160005b838110156114f557815163ffffffff16875295820195908201906001016114d3565b509495945050505050565b606080825284519082018190526000906020906080840190828801845b828110156115395781518452928401929084019060010161151d565b5050508381038285015261154d81876114bf565b9150508281036040840152610d0e81856114bf565b60005b8381101561157d578181015183820152602001611565565b8381111561158c576000848401525b50505050565b600082516115a4818460208701611562565b9190910192915050565b60208152600082518060208401526115cd816040850160208701611562565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea264697066735822122039f70fbf4fd61bcbf5b0f823090e7eea87a3353b73a9cac8151fea3a80880cdf64736f6c634300080a0033';

type ERC4626BridgeConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: ERC4626BridgeConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class ERC4626Bridge__factory extends ContractFactory {
  constructor(...args: ERC4626BridgeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _rollupProcessor: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ERC4626Bridge> {
    return super.deploy(_rollupProcessor, overrides || {}) as Promise<ERC4626Bridge>;
  }
  override getDeployTransaction(
    _rollupProcessor: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_rollupProcessor, overrides || {});
  }
  override attach(address: string): ERC4626Bridge {
    return super.attach(address) as ERC4626Bridge;
  }
  override connect(signer: Signer): ERC4626Bridge__factory {
    return super.connect(signer) as ERC4626Bridge__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC4626BridgeInterface {
    return new utils.Interface(_abi) as ERC4626BridgeInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC4626Bridge {
    return new Contract(address, _abi, signerOrProvider) as ERC4626Bridge;
  }
}