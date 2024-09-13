import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { ReadBlog } from "../components/ReadBlog";
import { Spinner } from "../components/Spinner";
import { AppBar } from "../components/AppBar";

export const Blog = () => {
    const { id } = useParams()
    const { loading, blog } = useBlog({
        id: id || ""
    });

    if (loading || !blog) {
        return <div>
            <AppBar />
            <div className="h-screen flex flex-col justify-center">
                <div className="flex justify-center">


                    <Spinner />

                </div>
            </div>
        </div>

    }
    return <div>
        <ReadBlog blog={blog} />
    </div>
}