import { SupportedChainId } from 'constants/chains'

/**
 * Map of supported chains to USDC contract addresses
 */
export const CHAIN_IDS_TO_USDC_ADDRESSES = {
  [SupportedChainId.ETH_MAINNET]: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  [SupportedChainId.AVAX_MAINNET]: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
  [SupportedChainId.OP_MAINNET]: '0x0b2c639c533813f4aa9d7837caf62653d097ff85',
  [SupportedChainId.ARB_MAINNET]: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
  [SupportedChainId.NOBLE_MAINNET]: '11',
  [SupportedChainId.SOL_MAINNET]:
    'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
  [SupportedChainId.BASE_MAINNET]: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
  [SupportedChainId.POLYGON_POS]: '0x3c499c542cef5e3811e1192ce70d8cc03d5c3359',
}

/**
 * Map of supported chains to Token Messenger contract addresses
 */
export const CHAIN_IDS_TO_TOKEN_MESSENGER_ADDRESSES = {
  [SupportedChainId.ETH_MAINNET]: '0xbd3fa81b58ba92a82136038b25adec7066af3155',

  [SupportedChainId.AVAX_MAINNET]: '0x6b25532e1060ce10cc3b0a99e5683b91bfde6982',
  [SupportedChainId.OP_MAINNET]: '0x2B4069517957735bE00ceE0fadAE88a26365528f',

  [SupportedChainId.ARB_MAINNET]: '0x19330d10D9Cc8751218eaf51E8885D058642E08A',
  [SupportedChainId.BASE_MAINNET]: '0x1682Ae6375C4E4A97e4B583BC394c861A46D8962',
  [SupportedChainId.POLYGON_POS]: '0x9daF8c91AEFAE50b9c0E69629D3F6Ca40cA3B3FE',
  [SupportedChainId.SOL_MAINNET]:
    'CCTPiPYPc6AsJuwueEnWgSgucamXDZwBd53dQ11YiKX3',
}

/**
 * Map of supported chains to Message Transmitter contract addresses
 */
export const CHAIN_IDS_TO_MESSAGE_TRANSMITTER_ADDRESSES = {
  [SupportedChainId.ETH_MAINNET]: '0x0a992d191deec32afe36203ad87d7d289a738f81',
  [SupportedChainId.AVAX_MAINNET]: '0x8186359af5f57fbb40c6b14a588d2a59c0c29880',
  [SupportedChainId.OP_MAINNET]: '0x4d41f22c5a0e5c74090899e5a8fb597a8842b3e8',
  [SupportedChainId.ARB_MAINNET]: '0xC30362313FBBA5cf9163F0bb16a0e01f01A896ca',
  [SupportedChainId.BASE_MAINNET]: '0xAD09780d193884d503182aD4588450C416D6F9D4',
  [SupportedChainId.POLYGON_POS]: '0xF3be9355363857F3e001be68856A2f96b4C39Ba9',
  [SupportedChainId.SOL_MAINNET]:
    'CCTPmbSD7gX1bxKPAmg77w8oFzNFpaQiQUWD43TKaecd',
}
