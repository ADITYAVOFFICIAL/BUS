import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { email, password, role = "student" } = await request.json(); // Default role to "student"

  await connect();

  // Check if the email already exists in the database
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    // Return error if email is already in use
    return new NextResponse("Email already registered", { status: 400 });
  }

  // Hash the password before saving it to the database
  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    email,
    password: hashedPassword,
    role, // Include the role in the new user document
  });

  try {
    // Save the new user to the database
    await newUser.save();
    return new NextResponse("User registered successfully", { status: 201 });
  } catch (err: any) {
    // Handle any errors that occur during registration
    return new NextResponse(err.message || "Failed to register user", { status: 500 });
  }
};
