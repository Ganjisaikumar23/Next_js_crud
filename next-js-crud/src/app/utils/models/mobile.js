const { default: mongoose } = require("mongoose");

const MobileSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    model: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const MobileModel =
  mongoose.models.mobile || mongoose.model("mobile", MobileSchema);

export default MobileModel;
