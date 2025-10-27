
// "use client";
// import { useEffect, useState } from "react";
// import { db } from "../firebaseConfig";
// import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import { Button, Table } from "react-bootstrap";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../redux/authSlice"; // Import logout action
// import Navigation from "../components/Header/navigation";
// import LogoutButton from "../utils/LogoutButton";

// const BlogList = () => {
//   const [blogs, setBlogs] = useState([]);
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  
//   // Force authentication check on component mount
//   useEffect(() => {
//     const storedAuth = sessionStorage.getItem("isAuthenticated");
//     if (!storedAuth || storedAuth !== "true") {
//       router.replace("/login"); // Redirect to login if not authenticated
//     }
//   }, [isAuthenticated, router]);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       const querySnapshot = await getDocs(collection(db, "blogs"));
//       const blogsData = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setBlogs(blogsData);
//     };
//     fetchBlogs();
//   }, []);

//   const handleDelete = async (id) => {
//     if (confirm("Are you sure you want to delete this blog?")) {
//       await deleteDoc(doc(db, "blogs", id));
//       setBlogs(blogs.filter((blog) => blog.id !== id));
//     }
//   };

//   const handleLogout = () => {
//     dispatch(logout()); // Update Redux state
//     sessionStorage.removeItem("isAuthenticated"); // Remove authentication flag
//     router.replace("/login"); // Redirect to login
//   };

//   return (
//     <>
//       <div className="container">
//         {/* Header Section */}
//         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap" }}>
//           <h2 style={{ marginBottom: "10px" }}>Manage Blogs</h2>
//           <div>
//             <Button variant="success" onClick={() => router.push("/createBlog")}>
//               + Create New Blog
//             </Button>{" "}
//             <Button variant="danger" onClick={handleLogout}>Logout</Button>
//           </div>
//         </div>

//         {/* Responsive Blog Table */}
//         <div className="table-responsive">
//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Category</th>
//                 <th>Created Date</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {blogs.map((blog) => (
//                 <tr key={blog.id}>
//                   <td>{blog.title}</td>
//                   <td>{blog.category ? blog.category : "No Categories"}</td>
//                   <td>{blog.createdAt ? new Date(blog.createdAt.toDate()).toLocaleDateString() : "N/A"}</td>
//                   <td>
//                     {isAuthenticated && (
//                       <Button variant="warning" onClick={() => router.push(`/editBlog/${blog.id}`)}>
//                         Edit
//                       </Button>
//                     )}{" "}
//                     <Button variant="danger" onClick={() => handleDelete(blog.id)}>Delete</Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>
//       </div>

//       {/* Styles for responsiveness */}
//       <style jsx>{`
//         @media (max-width: 768px) {
//           .container {
//             padding: 10px;
//           }
//           .table-responsive {
//             overflow-x: auto;
//           }
//           h2 {
//             font-size: 1.5rem;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default BlogList;


"use client";
import { useEffect, useState } from "react";
import { blogDb as db } from "../../../firebaseConfigBlogs";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { Button, Table } from "react-bootstrap";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const router = useRouter();

  // ✅ Fetch blogs on component mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      await deleteDoc(doc(db, "blogs", id));
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
    }
  };

  return (
    <div className="container">
      {/* Header Section */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap" }}>
        <h2 style={{ marginBottom: "10px" }}>Manage Blogs</h2>
        <Button variant="success" onClick={() => router.push("/createBlog")}>
          + Create New Blog
        </Button>
      </div>

      {/* Responsive Blog Table */}
      <div className="table-responsive">
        {loading ? (
          <p>Loading blogs...</p>
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Created Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td>{blog.title}</td>
                  <td>{blog.category ? blog.category : "No Categories"}</td>
                  <td>{blog.createdAt ? new Date(blog.createdAt.toDate()).toLocaleDateString() : "N/A"}</td>
                  <td>
                    <Button variant="warning" onClick={() => router.push(`/editBlog/${blog.id}`)}>
                      Edit
                    </Button>{" "}
                    <Button variant="danger" onClick={() => handleDelete(blog.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>

      {/* Styles for responsiveness */}
      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            padding: 10px;
          }
          .table-responsive {
            overflow-x: auto;
          }
          h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogList;
