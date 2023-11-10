import Student from "../models/Student.js";

// create studet
export const createStudent = async (req, res) => {
  await Student.create({
    name: "Ayesha",
    roll: "001103",
    location: "Dhaka",
    gender: "Female",
    books: ["653619e20033adda3044fc60", "653619c90033adda3044fc5c"],
    team: "65361b5af6b4fda91f6a3382",
  });
  res.status(200).json(req.body);
};

// get all student
export const getAllStudent = async (req, res) => {
  const data = await Student.find().populate("books").populate("team");

  res.status(200).json(data);
};

// update student
export const updateStudent = async (req, res) => {
  // const {id} =req.params;

  // push,pull single data
  // const data = await Student.findByIdAndUpdate(
  //   "65362044341decedb71edebf",
  //   {
  //     $pull: { books: "6536199e0033adda3044fc58" },
  //   },
  //   { new: true }
  // );

  // set empty
  // const data = await Student.findByIdAndUpdate(
  //   "65362044341decedb71edebf",
  //   {
  //     $set: { books: [] },
  //   },
  //   { new: true }
  // );

  // push multiple data
  // const data = await Student.findByIdAndUpdate(
  //   "65362044341decedb71edebf",
  //   {
  //     $push: {
  //       books: {
  //         $each: ["653619c90033adda3044fc5c", "653619b80033adda3044fc5a"],
  //       },
  //     },
  //   },
  //   { new: true }
  // );

  // pull multiple data
  // const data = await Student.findByIdAndUpdate(
  //   "65362044341decedb71edebf",
  //   {
  //     $pull: {
  //       books: {
  //         $in: ["653619c90033adda3044fc5c", "653619d50033adda3044fc5e"],
  //       },
  //     },
  //   },
  //   { new: true }
  // );

  res.status(200).json(req.body);
};
