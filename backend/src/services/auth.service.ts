import User, { type UserType } from "@/models/user.model.js";
import { generateAccessToken } from "@/utils/jwt.js";
import bcrypt from "bcrypt";

const registerUser = async (data: UserType) => {
    const { name, email, password, phone } = data;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        phone
    });

    return {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
    }
};

const loginUser = async (data: UserType) => {
  
  const { email, password } = data;
  
  const user = await User.findOne({ email });
  
  if (!user) {
    throw new Error("Invalid credentials");
  }
  
  const isPasswordValid = await bcrypt.compare(password, user.password);
  
  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

    const token = generateAccessToken({
      id: user._id,
      role: user.role,
    })

    return {
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    };
  };
  

export default {
    registerUser,
    loginUser
};