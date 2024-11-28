import { v2 as cloudinary } from "cloudinary";
import fileSystem from "fs";

cloudinary.config({
  cloud_name: process.config.CLOUDINARY_NAME,
  api_key: process.config.CLOUDINARY_API_KEY,
  api_secret: process.config.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log(
      `file uploaded on cloudinary. File src: ${response.secure_url}`
    );

    // Once the file is uploaded, we would like to delete it from our server
    fileSystem.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    // If an error occurs during the upload, delete the local file and return null
    fileSystem.unlink(localFilePath, (err) => {
      if (err) {
        console.error(err);
      }
      console.log(`file Deleted: ${localFilePath}`);
    });
    return null;
  }
};
export { uploadOnCloudinary };
