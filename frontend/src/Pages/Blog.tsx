import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { ReadBlog } from "../components/ReadBlog";

export const Blog = () => {
    const { id } = useParams()
    const { loading, blog } = useBlog({
        id: id || ""
    });

    if (loading) {
        return <div>
            loading...
        </div>
    }
    return <div>
        <ReadBlog blog={blog} />
    </div>
}