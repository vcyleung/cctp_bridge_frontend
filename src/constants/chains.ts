/**
 * List of all the chains/networks supported
 */
export enum Chain {
  ETH = 'ETH',
  AVAX = 'AVAX',
  OP = 'OP',
  ARB = 'ARB',
  NOBLE = 'NOBLE',
  SOL = 'SOL',
  BASE = 'BASE',
  POLYGON_POS = 'POLYGON_POS',
}

/**
 * List of all the chain/network IDs supported
 */
export enum SupportedChainId {
  ETH_MAINNET = 1,
  AVAX_MAINNET = 43114,
  OP_MAINNET = 10,
  ARB_MAINNET = 42161,
  NOBLE_MAINNET = 1,
  SOL_MAINNET = 101,
  BASE_MAINNET = 8453,
  POLYGON_POS = 137,
  // these are testnets
  // ETH_SEPOLIA = 11155111,
  // AVAX_FUJI = 43113,
  // ARB_SEPOLIA = 421614,
}

/**
 * List of all the chain/network IDs supported in hexadecimals
 * TODO: Infer from SupportedChainId
 */
export const SupportedChainIdHex = {
  ETH_MAINNET: '0x1',
  AVAX_MAINNET: '0xa86a',
  OP_MAINNET: '0xa',
  ARB_MAINNET: '0xa4b1',
  // this is probably wrong
  NOBLE_MAINNET: '0x1',
  // this is probably wrong
  SOL_MAINNET: '0x65',
  BASE_MAINNET: '0x2105',
  POLYGON_POS: '0x89',
  // these are testnets
  // ETH_SEPOLIA: '0xaa36a7',
  // AVAX_FUJI: '0xa869',
  // ARB_SEPOLIA: '0x66eee',
}

interface ChainToChainIdMap {
  [key: string]: number
}

/**
 * Maps a chain to it's chain ID
 */

export const CHAIN_TO_CHAIN_ID: ChainToChainIdMap = {
  [Chain.ETH]: SupportedChainId.ETH_MAINNET,
  [Chain.AVAX]: SupportedChainId.AVAX_MAINNET,
  [Chain.OP]: SupportedChainId.OP_MAINNET,
  [Chain.ARB]: SupportedChainId.ARB_MAINNET,
  [Chain.NOBLE]: SupportedChainId.NOBLE_MAINNET,
  [Chain.SOL]: SupportedChainId.SOL_MAINNET,
  [Chain.BASE]: SupportedChainId.BASE_MAINNET,
  [Chain.POLYGON_POS]: SupportedChainId.ETH_MAINNET,
}

interface ChainToChainNameMap {
  [key: string]: string
}

/**
 * Maps a chain to it's readable name
 */
export const CHAIN_TO_CHAIN_NAME: ChainToChainNameMap = {
  ETH: 'Ethereum',
  AVAX: 'Avalanche',
  OP: 'Optimism',
  ARB: 'Arbitrum',
  NOBLE: 'NOBLE',
  SOL: 'Solana',
  BASE: 'Basechain',
  POLYGON_POS: 'MATIC',
}

/**
 * Array of all the supported chain IDs
 */
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(
  SupportedChainId
).filter((id) => typeof id === 'number') as SupportedChainId[]

/**
 * List of Circle-defined IDs referring to specific domains
 */
export enum DestinationDomain {
  ETH = 0,
  AVAX = 1,
  OP = 2,
  ARB = 3,
  NOBLE = 4,
  SOL = 5,
  BASE = 6,
  POLYGON_POS = 7,
}

// https://eips.ethereum.org/EIPS/eip-3085
interface AddEthereumChainParameter {
  chainId: string
  blockExplorerUrls?: string[]
  chainName?: string
  iconUrls?: string[]
  nativeCurrency?: {
    name: string
    symbol: string
    decimals: number
  }
  rpcUrls?: string[]
}

const ETH_MAINNET: AddEthereumChainParameter = {
  chainId: SupportedChainIdHex.ETH_MAINNET,
  blockExplorerUrls: ['https://etherscan.io'],
  chainName: 'Ethereum Mainnet',
  nativeCurrency: {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: ['https://mainnet.infura.io/v3/'],
}

const AVAX_MAINNET: AddEthereumChainParameter = {
  chainId: SupportedChainIdHex.AVAX_MAINNET,
  blockExplorerUrls: ['https://snowtrace.io/'],
  chainName: 'Avalanche Mainnet',
  nativeCurrency: {
    name: 'Avalanche',
    symbol: 'AVAX',
    decimals: 18,
  },
  rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
}

const ARB_MAINNET: AddEthereumChainParameter = {
  chainId: SupportedChainIdHex.ARB_MAINNET,
  blockExplorerUrls: ['https://arbiscan.io/'],
  chainName: 'Arbitrum Mainnet',
  nativeCurrency: {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: ['https://arb1.arbitrum.io/rpc'],
}
const OP_MAINNET: AddEthereumChainParameter = {
  chainId: SupportedChainIdHex.OP_MAINNET,
  blockExplorerUrls: ['https://optimistic.etherscan.io'],
  chainName: 'Optimism Mainnet',
  nativeCurrency: {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: ['https://mainnet.optimism.io'],
}

interface ChainIdToChainParameters {
  [key: string]: AddEthereumChainParameter
}

export const CHAIN_ID_HEXES_TO_PARAMETERS: ChainIdToChainParameters = {
  [SupportedChainIdHex.ETH_MAINNET]: ETH_MAINNET,
  [SupportedChainIdHex.AVAX_MAINNET]: AVAX_MAINNET,
  [SupportedChainIdHex.ARB_MAINNET]: ARB_MAINNET,
  [SupportedChainIdHex.OP_MAINNET]: OP_MAINNET,
}
