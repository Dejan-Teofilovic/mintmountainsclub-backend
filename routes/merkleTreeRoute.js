const express = require('express');
const router = express.Router();
const { getMerkleRoot, getHexProof } = require('../controllers/merkleTreeController');

router.get('/getMerkleRoot/:wlNumber', getMerkleRoot);
router.put('/getHexProof/:address', getHexProof)

module.exports = router;