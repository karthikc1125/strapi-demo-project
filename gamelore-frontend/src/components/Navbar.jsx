import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-[#0f172a] text-white p-4 flex justify-between items-center border-b border-gray-800">
            <h1 className="text-xl font-bold text-purple-500">GameLore</h1>
            <div className="space-x-6">
                <Link to="/" className="hover:text-purple-400 transition">Home</Link>
                <Link to="/blogs" className="hover:text-purple-400 transition">Lore Blogs</Link>
                <Link to="/characters" className="hover:text-purple-400 transition">Characters</Link>
                <Link to="/items" className="hover:text-purple-400 transition">Items</Link>
            </div>
        </nav>
    );
}
