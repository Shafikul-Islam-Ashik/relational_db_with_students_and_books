// import mongoose from "mongoose";

// // customer schema
// const customerSchema = mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   age: {
//     type: Number,
//     required: true,
//     trim: true,
//   },
//   location: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   gender: {
//     type: String,
//     required: true,
//     trim: true,
//     enum: ["Male", "Female", "Custom"],
//   },
//   cell: {
//     type: String,
//     required: true,
//     trim: true,
//     unique: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     unique: true,
//   },
//   photo: {
//     type: String,
//     default: null,
//   },
//   status: {
//     type: Boolean,
//     default: true,
//   },
// });

// // create Customer Model
// export default mongoose.model("Customer", customerSchema);
