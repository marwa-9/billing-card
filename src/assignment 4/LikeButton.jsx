import { useState } from "react";

// GitHub: https://github.com/marwa-9

function LikeButton() { const [likes, setLikes] = useState(0);
const handleLike = () => { setLikes(likes + 1); };
return (
     <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-100">
     <h2 className="text-xl font-semibold"> ❤️ Likes: {likes} </h2>
  <button
    onClick={handleLike}
    className="rounded bg-blue-500 px-5 py-2 text-white hover:bg-blue-600"
  >
    Like ❤️
  </button>
</div>
); }
export default LikeButton;