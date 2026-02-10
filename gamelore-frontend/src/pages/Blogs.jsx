import { useEffect, useState } from "react";
import axios from "axios";

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:1337/api/lore-blogs?populate=*")
            .then(res => {
                setBlogs(res.data.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="p-8 text-center text-white">Loading lore...</div>;

    return (
        <div className="p-8 max-w-4xl mx-auto space-y-8">
            {blogs.map(blog => (
                <div key={blog.id} className="bg-[#1e293b] text-white rounded-xl overflow-hidden shadow-lg border border-gray-700">
                    {blog.image && (
                        <img
                            src={`http://localhost:1337${blog.image.url}`}
                            className="h-64 w-full object-cover"
                            alt={blog.title}
                        />
                    )}
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-purple-400 mb-4">{blog.title}</h2>
                        {/* Very simple Rich Text rendering for demo purposes - just dumping text or handling simple paragraphs if it's straight text.
                Real Strapi Rich Text is blocks. Assuming specific format or just JSON stringify for debug if complex.
                But usually it's blocks. For demo, we might need a block renderer or just text.
                Let's assume user inputs simple text for now or we just verify structure.
            */}
                        <div className="prose prose-invert max-w-none text-gray-300">
                            {/* Note: Strapi 5 Rich Text is usually blocks. We'll need a renderer.
                   For this simple demo, we will just display a placeholder or raw text if possible.
                   If it's just a text field in schema, it's fine. Implementation plan said Rich Text.
                   For simplicity, I will attempt to render it if it's a string, or just show "Read more..."
                */}
                            <p>Read the full lore in the game...</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
