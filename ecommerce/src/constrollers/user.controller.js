import User from "../models/user.model";

export const getAll = async (req, res, next) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      message: "user fetched",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};