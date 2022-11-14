const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');
const { WHITELIST_1, WHITELIST_2 } = require('../utils/constants');

exports.getMerkleRoot = (req, res) => {
    const { wlNumber } = req.params;
    let leafNodes = null;

    try {
        if(wlNumber == 1) {
            leafNodes = WHITELIST_1.map(address => keccak256(address));
        } else {
            leafNodes = WHITELIST_2.map(address => keccak256(address));
        }
        const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

        const merkleTreeStructure = merkleTree.toString();
        return res.status(200).send(merkleTreeStructure);
    } catch (error) {
        console.log('>>>>>>>>>>> error => ', error)
        return res.status(5000).send(error.message)
    }
};

exports.getHexProof = (req, res) => {
    const { wlNumber } = req.body;
    const { address } = req.params;
    try {
        if(wlNumber == 1) {
            leafNodes = WHITELIST_1.map(addr => keccak256(addr));
        } else {
            leafNodes = WHITELIST_2.map(addr => keccak256(addr));
        }
        const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

        const hexProof = merkleTree.getHexProof(keccak256(address));

        return res.status(200).send(hexProof);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message);
    }
}