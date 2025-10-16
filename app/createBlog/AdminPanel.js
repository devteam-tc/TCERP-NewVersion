// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { auth } from "../firebaseConfig"; // Ensure this path is correct
// import AddSectionsForm from "./form";
// import { onAuthStateChanged } from "firebase/auth";

// const AdminPanel = () => {
//   const [user, setUser] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (authenticatedUser) => {
//       if (authenticatedUser) {
//         setUser(authenticatedUser);
//       } else {
//         router.push("/login"); // Redirect to login if not authenticated
//       }
//     });

//     return () => unsubscribe();
//   }, [router]);

//   if (!user) {
//     return <p>Loading...</p>; // Show loading while checking auth state
//   }

//   return (
//     <div>
//       <AddSectionsForm />
//     </div>
//   );
// };

// export default AdminPanel;

// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useSelector } from "react-redux";
// import AddSectionsForm from "../admin/createBlog/form";

// const AdminPanel = () => {
//   const router = useRouter();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       router.replace("/login"); // Use replace to prevent going back
//     }
//   }, [isAuthenticated, router]);

//   if (!isAuthenticated) {
//     return <div>Redirecting...</div>;
//   }

//   return (
//     <div>
//       <AddSectionsForm />
//     </div>
//   );
// };

// export default AdminPanel;

// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useSelector } from "react-redux";
// import AddSectionsForm from "../admin/createBlog/form";

// const AdminPanel = () => {
//   const router = useRouter();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       router.replace("/login"); // Use replace to prevent going back
//     }
//   }, [isAuthenticated, router]);

//   if (!isAuthenticated) {
//     return <div>Redirecting...</div>;
//   }

//   return (
//     <div>
//       <AddSectionsForm />
//     </div>
//   );
// };

// export default AdminPanel;

"use client";

import AddSectionsForm from "../admin/createBlog/form";

const AdminPanel = () => {
  return (
    <div>
      <AddSectionsForm />
    </div>
  );
};

export default AdminPanel;


