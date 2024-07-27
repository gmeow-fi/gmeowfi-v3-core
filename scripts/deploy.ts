import { ethers } from 'hardhat'
import { ContractFactory } from 'ethers'

async function main() {
  const [deployer] = await ethers.getSigners()
  console.log('Deploying contracts with the account:', deployer.address)
  const ONE_BP_FEE = 100
  const ONE_BP_TICK_SPACING = 1
  // get private key of deployer

  const gmeowFiV3Factory = await ethers.deployContract('GMeowFiV3Factory', [])

  console.log('GMeowFiV3Factory deployed to:', await gmeowFiV3Factory.getAddress())
  console.log('Pool init code hash:', await gmeowFiV3Factory.INIT_CODE_POOL_HASH())

  gmeowFiV3Factory.enableFeeAmount(ONE_BP_FEE, ONE_BP_TICK_SPACING)
  console.log(`GMeowFiV3Factory added a new fee tier ${ONE_BP_FEE / 100} bps with tick spacing ${ONE_BP_TICK_SPACING}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
