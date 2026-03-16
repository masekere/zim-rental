import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: true
    },

    phone: {
      type: String,
      required: true
    },

    role: {
      type: String,
      enum: ["tenant", "landlord", "admin"],
      default: "tenant"
    },

    isVerified: {
      type: Boolean,
      default: false
    },

    profileImage: {
      type: String
    },

    // location: {
    //   city: {
    //     type: String,
    //     default: "Harare"
    //   },
    //   area: {
    //     type: String
    //   }
    // },

    // savedListings: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Property"
    //   }
    // ],

    // postedListings: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Property"
    //   }
    // ]
  },
  {
    timestamps: true
  }
);

export type UserType = mongoose.InferSchemaType<typeof userSchema>;
const User = mongoose.model("User", userSchema);

export default User;