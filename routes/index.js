const router = require("express").Router();
const userRouter = require("./users");
const tiketsRouter = require("./tikets");
const { login, createUser } = require('../controllers/users');
const auth = require('../middlewares/auth');

router.post("/signin", login);
router.post("/signup", createUser);
router.use(auth);
router.use("/users", userRouter);
router.use("/tikets", tiketsRouter);

module.exports = { router };
