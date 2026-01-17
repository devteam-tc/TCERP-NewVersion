// import EditBlogForm from "./EditBlogForm";

// const EditBlogPage = ({ params }) => {
//   return <EditBlogForm id={params.id} />;
// };

// export default EditBlogPage;


import EditBlogForm from "./EditBlogForm";
import { blogDb as db } from "../../../firebaseConfig"; // Use blogs-specific DB
import { collection, getDocs } from "firebase/firestore";

export async function generateStaticParams() {
  const snapshot = await getDocs(collection(db, "blogs"));
  return snapshot.docs.map((doc) => ({
    id: doc.id, // Uses Firestore document ID as the dynamic param
  }));
}

const EditBlogPage = ({ params }) => {
  return <EditBlogForm id={params.id} />;
};

export default EditBlogPage;
