import { useNavigate, useParams } from "react-router-dom";
import { useBlogPosts } from "../hooks/useBlogPosts";

function ViewPostPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { posts, isLoading, isError } = useBlogPosts();

  const currentPost = posts.find((p) => String(p.id) === String(id));

  return (
    <div>
      <h1>View Post Page</h1>

      <div className="view-post-container">
        <h2>{currentPost ? currentPost.title : "Post Title"}</h2>
        <p>{currentPost ? currentPost.content : "Content"}</p>
      </div>

      <hr />
      <div className="show-all-posts-container">
        <h2>All Posts</h2>
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h1>{post.title}</h1>
            <div className="post-actions">
              <button
                className="view-button"
                onClick={() => navigate(`/post/view/${post.id}`)}
              >
                View post
              </button>
            </div>
          </div>
        ))}

        {isError ? <h1>Request failed</h1> : null}
        {isLoading ? <h1>Loading ....</h1> : null}
      </div>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewPostPage;
