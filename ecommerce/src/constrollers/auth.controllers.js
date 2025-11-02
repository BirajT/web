import { USER_ROLE } from "../constants/enums.constants.js";
import USER from "../models/user.model.js";

// register user
export const register = async (req, res, next) => {
  try {
    console.log(req.body)
    const { first_name, last_name, email, password, phone, gender } = req.body;

    const user = await USER.create({
      first_name,
      last_name,
      email,
      password,
      phone,
      gender,
      role: USER_ROLE.USER,
    });

    res.status(201).json({
      message: "Account created",
      status: "succes",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// login
export const login = async (req, res, next) => {
  try {
    //!email pass
    const { email, password } = req.body;
    if (!email) {
      const error = new Error("email is required");
      next(error);
    }
    if (!password) {
      const error = new Error("password is required");
      throw error;
    }
    //! check/get user by email
    const user = await USER.findOne({ email });
    // throw error if user not found
    if (!user) {
      const error = new Error("Credentials does not match");
      throw error;
    }
    //! compare password
    const isMatch = password === user.password;
    //! throw error if pass do not match
    if (!isMatch) {
      const error = new Error("Credentials does not match");
      throw error;
    }
      //! login success
      res.status(201).json({
          message: 'login success',
          data:user
      })
  } catch (error) {
    next(error);
  }
};

// change password

// forgot password