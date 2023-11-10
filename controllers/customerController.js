// // import Customer from "../models/Customer.js";

// /**
//  * customer register
//  */
// export const createCustomer = async (req, res) => {
//   const { name, age, location, gender, cell, email } = req.body;

//   // file manage
//   let customerPhoto = null;

//   if (req.file?.filename) {
//     customerPhoto = req.file.filename;
//   }

//   const data = await Customer.create({
//     name,
//     age,
//     location,
//     gender,
//     cell,
//     email,
//     photo: customerPhoto,
//   });
//   res.status(200).json(data);
// };

// /**
//  * get all customer
//  */
// export const getCustomer = async (req, res) => {
//   const data = await Customer.find();

//   res.status(200).json(data);
// };

// /**
//  * get single customer
//  */
// export const getSingleCustomer = async (req, res) => {
//   const { id } = req.params;

//   // const data = await Customer.findOne({ _id: id });
//   const data = await Customer.findById(id);

//   res.status(200).json(data);
// };

// /**
//  * delete customer
//  */

// export const deleteCustomer = async (req, res) => {
//   const { id } = req.params;

//   // const data = await Customer.deleteOne({ _id: id });
//   const data = await Customer.findByIdAndDelete(id);

//   res.status(200).json(data);
// };

// /**
//  * update customer
//  */
// export const updateCustomer = async (req, res) => {
//   const { id } = req.params;
//   const { name, age, location, gender, cell, email } = req.body;

//   // file manage
//   let customerPhoto = null;

//   if (req.file?.filename) {
//     customerPhoto = req.file.filename;
//   }

//   const data = await Customer.findByIdAndUpdate(
//     id,
//     { name, age, location, gender, cell, email, photo: customerPhoto },
//     { new: true }
//   );

//   // const data = await Customer.updateOne(
//   //   { _id: id },
//   //   { name, age, location, gender, cell, email, photo: customerPhoto }
//   // );

//   res.status(200).json(data);
// };
