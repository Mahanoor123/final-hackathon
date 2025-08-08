// seeder.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import HijabStyle from "./models/HijabStyle.js";
import hijabStylesData from "./data/hijabStyles.js";
import dbConnection from "./config/db.js";

dotenv.config();


const seedHijabStyles = async () => {
  try {
    await dbConnection();

    await HijabStyle.deleteMany();
    console.log("🗑️ Old hijab styles removed");

    await HijabStyle.insertMany(
      hijabStylesData.map(style => ({
        ...style,
        reviews: [],
        avgRating: 0,
        reviewCount: 0
      }))
    );

    console.log("✅ Hijab styles seeded successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Seeding error:", err);
    process.exit(1);
  }
};

seedHijabStyles();
