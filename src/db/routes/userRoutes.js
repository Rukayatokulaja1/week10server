const {Router} = require("express");
const userRouter = Router();
const addUser = require("../controllers/addUser");
const hashPassword = require("../middleware/hashPassword");
const checkPassword = require("../middleware/checkPassword");
const listAllUsers = require("../controllers/listAllUsers");
const login = require("../controllers/login");
const checkToken = require("../middleware/checkToken");
const addBook =require("../controllers/addBooks");
const bookDetails = require("../controllers/bookDetails");
const deleteAllBooks = require("../controllers/deleteAllBooks");
const deleteBooks = require("../controllers/deleteBook");
const updateAuthor = require("../controllers/updateAuthor");
const updateGenre = require("../controllers/updateGenre");
const listAllBooks = require("../controllers/listAllBooks");


userRouter.post("/addUser", hashPassword ,addUser);
userRouter.get("/listAllUsers", checkToken, listAllUsers);
userRouter.post("/login",checkPassword, login);
userRouter.post("/addBook", checkToken,addBook);
userRouter.get("/bookDetails", checkToken,bookDetails);
userRouter.post("/deleteAllBooks", checkToken,deleteAllBooks);
userRouter.post("/deleteBooks", checkToken,deleteBooks);
userRouter.post("/updateAuthor", checkToken,updateAuthor);
userRouter.post("/updateGenre", checkToken,updateGenre);
userRouter.post("/listAllBooks", checkToken,listAllBooks);



module.exports = userRouter;