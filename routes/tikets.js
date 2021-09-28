const router = require("express").Router();
const { getTikets, createTiket } = require('../controllers/tikets');

router.get("/", getTikets);
router.post("/", createTiket);

module.exports = router;
