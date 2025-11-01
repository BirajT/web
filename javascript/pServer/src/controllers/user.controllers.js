
import User from "../models/user.model.js";


//* get all users
export const getAll = async (req, res) => {
  try {

    const users = await User.find({})
    res.status(200).json({
      data: users,
      message: "Users fetched",
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

// gey by id
export const getById = async (req, res) => {
  try {
    const { id } = req.params;

    // const user = users.find((user) => user.id.toString() === id);

    // const user = await User.findOne({email,_id:id})
    const user = await User.findById(id)

    if (!user) {
      res.status(404).json({
        message: "user not found",
        data: null,
      });

      return;
    }

    res.status(200).json({
      data: user,
      message: "user fetched",
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

// create
export const create = async (req, res) => {
  try {
    const data = req.body;
    console.log(req.body);

    if (!data) {
      res.status(400).json({
        message: "Data expected",
      });
      return;
    }

   const user = await User.create(data)

    res.status(201).json({
      message: "Account created",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

// update
export const update = async (req, res) => {
  try {
    const data = req.body;
    const {id} = req.params

    if (!data) {
      res.status(400).json({
        message: "Data expected",
      });
      return;
    }

   const user = await User.findByIdAndUpdate(id,data,{new:true})

    res.status(201).json({
      message: "Account updated",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};


// delete
export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    // const user = users.find((user) => user.id.toString() === id);

    // const user = await User.findOne({_id:id})
   const user = await User.findByIdAndDelete(id)

    if (!user) {
      res.status(404).json({
        message: "user not found",
        data: null,
      });

      return;
    }

    res.status(200).json({
      data: null,
      message: "user deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};