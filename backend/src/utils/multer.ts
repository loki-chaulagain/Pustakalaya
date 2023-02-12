// import multer from "multer";
// import path from "path";

// multer({
//   storage: multer.diskStorage({}),
//   fileFilter: (req, file, cb) => {
//     let ext = path.extname(file.originalname);
//     if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
//       cb(null, false);
//       return;
//     }
//     cb(null, true);
//   },
// });

// export { multer };

import multer from "multer";

module.exports = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: 500000 },
});
