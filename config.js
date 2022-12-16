const { toWei } = require('web3-utils')

module.exports = {
    torn: {
        address: 'torn.contract.tornadocash.eth',
        cap: toWei('10000000'),
        pausePeriod: 45 * 24 * 3600, // 45 days
        distribution: {
            airdrop: { to: 'voucher', amount: toWei('500000') },
            miningV2: { to: 'rewardSwap', amount: toWei('1000000') },
            governance: { to: 'vesting.governance', amount: toWei('5500000') },
            team1: { to: 'vesting.team1', amount: toWei('822407') },
            team2: { to: 'vesting.team2', amount: toWei('822407') },
            team3: { to: 'vesting.team3', amount: toWei('822407') },
            team4: { to: 'vesting.team4', amount: toWei('500000') },
            team5: { to: 'vesting.team5', amount: toWei('32779') },
        },
    },
    governance: { address: 'governance.contract.tornadocash.eth' },
    governanceImpl: { address: 'governance-impl.contract.tornadocash.eth' },
    voucher: { address: 'voucher.contract.tornadocash.eth', duration: 12 },
    miningV2: {
        address: 'mining-v2.contract.tornadocash.eth',
        initialBalance: toWei('25000'),
        rates: [
            { instance: 'eth-01.tornadocash.eth', value: '10' },
            { instance: 'eth-1.tornadocash.eth', value: '20' },
            { instance: 'eth-10.tornadocash.eth', value: '50' },
            { instance: 'eth-100.tornadocash.eth', value: '400' },
        ],
    },
    rewardSwap: { address: 'reward-swap.contract.tornadocash.eth', poolWeight: 1e11 },
    tornadoTrees: { address: 'tornado-trees.contract.tornadocash.eth', levels: 20 },
    tornadoProxy: { address: 'tornado-proxy.contract.tornadocash.eth' },
    tornadoProxyLight: { address: '0x9a19E06322d1FE9bEDBd3F6555803De2713C1762' },
    rewardVerifier: { address: 'reward-verifier.contract.tornadocash.eth' },
    treeUpdateVerifier: { address: 'tree-update-verifier.contract.tornadocash.eth' },
    withdrawVerifier: { address: 'withdraw-verifier.contract.tornadocash.eth' },
    poseidonHasher2: { address: 'poseidon2.contract.tornadocash.eth' },
    poseidonHasher3: { address: 'poseidon3.contract.tornadocash.eth' },
    feeManager: { address: 'fee-manager.contract.tornadocash.eth' },
    tornadoStakingRewards: { address: 'staking-rewards.contract.tornadocash.eth' },
    relayerRegistry: { address: 'relayer-registry.contract.tornadocash.eth' },
    tornadoRouter: { address: '0x9a19E06322d1FE9bEDBd3F6555803De2713C1762' },
    instanceRegistry: { address: 'instance-registry.contract.tornadocash.eth' },
    deployer: { address: 'deployer.contract.tornadocash.eth' },
    vesting: {
        team1: {
            address: 'team1.vesting.contract.tornadocash.eth',
            beneficiary: '0x5A7a51bFb49F190e5A6060a5bc6052Ac14a3b59f',
            cliff: 12,
            duration: 36,
        },
        team2: {
            address: 'team2.vesting.contract.tornadocash.eth',
            beneficiary: '0xF50D442e48E11F16e105431a2664141f44F9feD8',
            cliff: 12,
            duration: 36,
        },
        team3: {
            address: 'team3.vesting.contract.tornadocash.eth',
            beneficiary: '0x6D2C515Ff6A40554869C3Da05494b8D6910D075E',
            cliff: 12,
            duration: 36,
        },
        team4: {
            address: 'team4.vesting.contract.tornadocash.eth',
            beneficiary: '0x504a9c37794a2341F4861bF0A44E8d4016DF8cF2',
            cliff: 12,
            duration: 36,
        },
        team5: {
            address: 'team5.vesting.contract.tornadocash.eth',
            beneficiary: '0x2D81713c58452c92C19b2917e1C770eEcF53Fe41',
            cliff: 12,
            duration: 36,
        },
        governance: {
            address: 'governance.vesting.contract.tornadocash.eth',
            cliff: 3,
            duration: 60,
        },
    },
    instances: {
        netId1: {
            eth: {
                instanceAddress: {
                    0.1: '0x654Ea9db6792569BD276FE862748B9D67afaA002',
                    1: '0x7c133d39220877a781fe2905cd7666e6b6e162aa',
                    10: '0xd545A432855ab48f722f47D2833569fb5f48Bf5F',
                    100: '0x5E6f20DE931848523B2a91F0330107A92e7E0A22',
                },
                symbol: 'ETH',
                decimals: 18,
            },
            dai: {
                instanceAddress: {
                    100: '0xe871436b8e0e69934e8f7237a07d7b06d7ca5ff7',
                    1000: '0xf0f16d32f3af84ae46245e490bedf1b0edf785ec',
                    10000: '0x7083377d0cf8852358dd6a559281c7c09366887d',
                    100000: '0x6bf81db7469a0bacb4a14f2cf0a70c7af8be2ff8',
                },
                tokenAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
                symbol: 'DAI',
                decimals: 18,
            },
            hex: {
                instanceAddress: {
                    100: '0x1fcde12aab9bde309019adf18b36c9aa66bd9e81',
                    1000: '0x4e2bd6c44813ec175c6666a2a615a8f05854ce91',
                    10000: '0x11a99a832d6615209fcb79125e5ef629a92f6c05',
                    100000: '0x4e09ee0f4230bb259f361ddf031ed075a32b34d6',
                },
                tokenAddress: '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39',
                symbol: 'HEX',
                decimals: 18,
            }
        },
        netId3: {
            eth: {
                instanceAddress: {
                    0.1: '0x3F589e020B1cf7562d71D8eF0c245212A792f66b',
                    0.2: '0xCBD2B9f6d73a3c337FD86AD36Ec753bCa2aB9971',
                    0.5: '0xCBD2B9f6d73a3c337FD86AD36Ec753bCa2aB9971',
                    1: '0x957935f41658944B54C44Ed8e535e0d004676Bc6',
                    5: '0x3f99a3B3e627e6c35Fde76f7Abf535903098D63D',
                },
                symbol: 'ETH',
                decimals: 18,
            },
        },
        netId5: {
            eth: {
                instanceAddress: {
                    0.1: '0x6Bf694a291DF3FeC1f7e69701E3ab6c592435Ae7',
                    1: '0x3aac1cC67c2ec5Db4eA850957b967Ba153aD6279',
                    10: '0x723B78e67497E85279CB204544566F4dC5d2acA0',
                    100: '0x0E3A09dDA6B20aFbB34aC7cD4A6881493f3E7bf7',
                },
                symbol: 'ETH',
                decimals: 18,
            },
            dai: {
                instanceAddress: {
                    100: '0x76D85B4C0Fc497EeCc38902397aC608000A06607',
                    1000: '0xCC84179FFD19A1627E79F8648d09e095252Bc418',
                    10000: '0xD5d6f8D9e784d0e26222ad3834500801a68D027D',
                    100000: '0x407CcEeaA7c95d2FE2250Bf9F2c105aA7AAFB512',
                },
                tokenAddress: '0xdc31Ee1784292379Fbb2964b3B9C4124D8F89C60',
                symbol: 'DAI',
                decimals: 18,
            },
            cdai: {
                instanceAddress: {
                    5000: '0x833481186f16Cece3f1Eeea1a694c42034c3a0dB',
                    50000: '0xd8D7DE3349ccaA0Fde6298fe6D7b7d0d34586193',
                    500000: '0x8281Aa6795aDE17C8973e1aedcA380258Bc124F9',
                    5000000: '0x57b2B8c82F065de8Ef5573f9730fC1449B403C9f',
                },
                tokenAddress: '0x822397d9a55d0fefd20F5c4bCaB33C5F65bd28Eb',
                symbol: 'cDAI',
                decimals: 8,
            },
            usdc: {
                instanceAddress: {
                    100: '0x05E0b5B40B7b66098C2161A5EE11C5740A3A7C45',
                    1000: '0x23173fE8b96A4Ad8d2E17fB83EA5dcccdCa1Ae52',
                    10000: undefined,
                    100000: undefined,
                },
                tokenAddress: '0xD87Ba7A50B2E7E660f678A895E4B72E7CB4CCd9C',
                symbol: 'USDC',
                decimals: 6,
            },
            usdt: {
                instanceAddress: {
                    100: '0x538Ab61E8A9fc1b2f93b3dd9011d662d89bE6FE6',
                    1000: '0x94Be88213a387E992Dd87DE56950a9aef34b9448',
                    10000: undefined,
                    100000: undefined,
                },
                tokenAddress: '0xb7FC2023D96AEa94Ba0254AA5Aeb93141e4aad66',
                symbol: 'USDT',
                decimals: 6,
            },
            wbtc: {
                instanceAddress: {
                    0.1: '0x242654336ca2205714071898f67E254EB49ACdCe',
                    1: '0x776198CCF446DFa168347089d7338879273172cF',
                    10: '0xeDC5d01286f99A066559F60a585406f3878a033e',
                    100: undefined,
                },
                tokenAddress: '0xC04B0d3107736C32e19F1c62b2aF67BE61d63a05',
                symbol: 'WBTC',
                decimals: 8,
            },
        },
        netId10: {
            eth: {
                instanceAddress: {
                    0.1: '0x84443CFd09A48AF6eF360C6976C5392aC5023a1F',
                    1: '0xd47438C816c9E7f2E2888E060936a499Af9582b3',
                    10: '0x330bdFADE01eE9bF63C209Ee33102DD334618e0a',
                    100: '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
                },
                symbol: 'ETH',
                decimals: 18,
            },
        },
        netId56: {
            bnb: {
                instanceAddress: {
                    0.1: '0x785D7A0dE8b7813033452c9D6DbC86a5238927fC',
                    1: '0x8d149a2F7903BB0341Cf3F05B199A8F7a7F7ecC9',
                    10: '0x6EEe950366AdC89c441b8CD80503b1974F419Da7',
                    100: '0xb9b3877b1ad881645fF372Fd7b7cB788DE8243BC'
                },
                symbol: 'BNB',
                decimals: 18,
            },
            busd: {
                instanceAddress: {
                    10: '0x9c3C7f40112eedFAaa42441054d7F4f5B8387D6F',
                    100: '0x8464Fa0ad92FE1b07B1f5ad5a5299f3990942c88',
                    1000: '0xbb77170F1F9d7d8A4F8cd6Caa1648be06aBaB087',
                    10000: '0xb8deE638c3743384558656987DD7DACAc542DaA1'
                },
                tokenAddress: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
                symbol: 'BUSD',
                decimals: 18,
            },
            storm: {
                instanceAddress: {
                    10: '0x7E08600c543cc02E75a9941D538a6DcA76801b8d',
                    100: '0xbA009F68347886f6FbEd2b7374d2cA3702C81625',
                    500: '0x3EF0D0A4F138dEf35676208c4303157fe5760Ecc',
                    1000: '0x970c0AE31904290b79431398eB79E76732Ac5AA9'
                },
                tokenAddress: '0xbBC4C1e5Bafe890B48639d493ca218EDa13f8e7b',
                symbol: 'STORM',
                decimals: 18,
            },
        },
        netId97: {
            bnb: {
                instanceAddress: {
                    0.1: '0xf9ca8b168647228Cf6Fe3718d03464c85e6292E0',
                    1: '0x957935f41658944B54C44Ed8e535e0d004676Bc6',
                    5: '0x330bdFADE01eE9bF63C209Ee33102DD334618e0a',
                    10: '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
                    20: '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
                },
                symbol: 'BNB',
                decimals: 18,
            },
            busd: {
                instanceAddress: {
                    10: '0x13C1CE2b1e4303F303b69E552712FdbB40DEEB63',
                    100: '0xd96f2B1c14Db8458374d9Aca76E26c3D18364307',
                },
                tokenAddress: '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7',
                symbol: 'BUSD',
                decimals: 18,
            },
        },
        netId100: {
            xdai: {
                instanceAddress: {
                    100: '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
                    1000: '0xdf231d99Ff8b6c6CBF4E9B9a945CBAcEF9339178',
                    10000: '0xaf4c0B70B2Ea9FB7487C7CbB37aDa259579fe040',
                    100000: '0xa5C2254e4253490C54cef0a4347fddb8f75A4998',
                },
                symbol: 'xDAI',
                decimals: 18,
            },
        },
        netId137: {
            matic: {
                instanceAddress: {
                    100: '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
                    1000: '0xdf231d99Ff8b6c6CBF4E9B9a945CBAcEF9339178',
                    10000: '0xaf4c0B70B2Ea9FB7487C7CbB37aDa259579fe040',
                    100000: '0xa5C2254e4253490C54cef0a4347fddb8f75A4998',
                },
                symbol: 'MATIC',
                decimals: 18,
            },
        },
        netId42161: {
            eth: {
                instanceAddress: {
                    0.1: '0x84443CFd09A48AF6eF360C6976C5392aC5023a1F',
                    1: '0xd47438C816c9E7f2E2888E060936a499Af9582b3',
                    10: '0x330bdFADE01eE9bF63C209Ee33102DD334618e0a',
                    100: '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
                },
                symbol: 'ETH',
                decimals: 18,
            },
        },
        netId43114: {
            avax: {
                instanceAddress: {
                    10: '0x330bdFADE01eE9bF63C209Ee33102DD334618e0a',
                    100: '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
                    500: '0xaf8d1839c3c67cf571aa74B5c12398d4901147B3',
                },
                symbol: 'AVAX',
                decimals: 18,
            },
        },
    },
}
