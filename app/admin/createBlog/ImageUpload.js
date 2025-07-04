// import styles from "./Form.module.css"
// const ImageUpload = ({ image, setImage }) => {
//     const handleImageChange = (e) => {
//       const file = e.target.files[0];
//       if (file) {
//         setImage(URL.createObjectURL(file));
//       }
//     };
  
//     return (
//       <div className={styles.section}>
//         <h3>Image Upload</h3>
//         <input type="file" onChange={handleImageChange} accept="image/*" />
//         {image && <img src={image} alt="Preview" style={{ width: "100px", height: "100px", marginTop: "10px" }} />}
//       </div>
//     );
//   };
  
//   export default ImageUpload;


// import React, { useState } from "react";
// import { storage } from "../../firebaseConfig";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// const ImageUpload = ({ image, setImage }) => {
//   const [file, setFile] = useState(null);
//   const [progress, setProgress] = useState(0);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = () => {
//     if (!file) return alert("Please select an image!");

//     const storageRef = ref(storage, `blogs_images/${Date.now()}-${file.name}`);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         setProgress(percent);
//       },
//       (error) => {
//         console.error("Upload error:", error);
//         alert("❌ Image upload failed!");
//       },
//       async () => {
//         const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
//         setImage(downloadURL); // ✅ Update the image URL in parent state
//         alert("✅ Image uploaded successfully!");
//       }
//     );
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button type="button" onClick={handleUpload}>Upload</button>
//       {progress > 0 && <p>Uploading: {Math.round(progress)}%</p>}
//       {image && <img src={image} alt="Uploaded" width="200" />}
//     </div>
//   );
// };

// export default ImageUpload;


import React, { useState } from "react";
import { storage } from "../../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import styles from "./Form.module.css"

const ImageUpload = ({ image, setImage }) => {
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    uploadImage(selectedFile); // ✅ Automatically upload when selected
  };

  const uploadImage = (file) => {
    const storageRef = ref(storage, `blogs_images/${Date.now()}-${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percent);
      },
      (error) => {
        console.error("Upload error:", error);
        alert("❌ Image upload failed!");
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setImage(downloadURL); // ✅ Update parent state with URL
        alert("✅ Image uploaded successfully!");
      }
    );
  };

  return (
    <div className={styles.section}>
      <input type="file" onChange={handleFileChange} />
      {progress > 0 && <p>Uploading: {Math.round(progress)}%</p>}
      {image && <img src={image} alt="Uploaded" width="200" />}
    </div>
  );
};

export default ImageUpload;
