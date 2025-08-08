import HijabStyle from "../models/HijabStyle.js";

export const getAllHijabstyles = async (req, res) => {
  try {
    const hijabStyles = await HijabStyle.find();

    res.status(200).json({
      success: true,
      count: hijabStyles.length,
      data: hijabStyles,
    });
  } catch (error) {
     res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};
