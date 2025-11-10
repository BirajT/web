import { USER_ROLE } from "../constants/enums.constants.js";
import CustomError from "../middlewares/error_handler.middleware.js";
import USER from "../models/user.model.js";
import { asyncHandler } from "../utils/asynchandler.utils.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.utils.js";
import { uploadToCloud } from "../utils/cloudinary.utils.js";
import { generateJWTToken } from "../utils/jwt.utils.js";

// register user
export const register = asyncHandler(async (req, res, next) => {
  const { first_name, last_name, email, password, phone, gender } = req.body;
  const image = req.file;
  console.log(image);

  if (!password) {
    throw new CustomError("Password is required", 400);
  }

  const hashedPass = await hashPassword(password);
  const user = new USER({
    first_name,
    last_name,
    email,
    password: hashedPass,
    phone,
    gender,
    role: USER_ROLE.USER,
  });

  if (image) {
    const { path, public_id } = await uploadToCloud(
      image.path,
      "/profile_images"
    );
    user.profile_image = {
      path,
      public_id,
    };
  }

  await user.save();

  res.status(201).json({
    message: "Account created",
    status: "succes",
    data: user,
  });
});

// login
export const login = asyncHandler(async (req, res, next) => {
  //!email pass
  console.log(req.body);
  const { email, password } = req.body;
  if (!email) {
    throw new CustomError("Email is required", 400);
  }
  if (!password) {
    throw new CustomError("password is required", 400);
  }
  //! check/get user by email
  const user = await USER.findOne({ email });
  // throw error if user not found
  if (!user) {
    throw new CustomError("Credentials does not match", 400);
  }
  //! compare password
  const isMatch = await comparePassword(password, user.password);
  //! throw error if pass do not match
  if (!isMatch) {
    throw new CustomError("Credentials does not match", 400);
  }

  //! token
  const access_token = generateJWTToken({
    _id: user._id,
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
    role:user.role
  })
  //
  //! login success
  res.status(201).json({
    message: "login success",
    data: user,
    access_token
  });
});

// change password

// forgot password
