import Navigation from "../components/Header/navigation";
import AdminPanel from "../createBlog/AdminPanel";
import BlogList from "./BlogList"

const page = () => {
  // return <AdminPanel />;
  return(
    <>
      <Navigation/>
      <BlogList/>
    </>
  )
}

export default page

