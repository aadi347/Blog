import { useState } from 'react'

const CommentSection = () => {
    const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  const addComment = () => {
    if (input.trim()) {
      setComments([...comments, input]);
      setInput("");
    }
  };
    return (
        <div>
            <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Comments</h3>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full border p-2 rounded"
        rows="3"
        placeholder="Add a comment"
      />
      <button onClick={addComment} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Post</button>
      <ul className="mt-4">
        {comments.map((c, i) => (
          <li key={i} className="bg-gray-100 p-2 rounded mb-2">{c}</li>
        ))}
      </ul>
    </div>
        </div>
    )
}

export default CommentSection
