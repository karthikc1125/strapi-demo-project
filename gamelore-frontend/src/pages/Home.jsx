import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:1337/api/games?populate=*")
            .then(res => {
                setGames(res.data.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError("Failed to fetch games. Is Strapi running?");
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="p-8 text-center">Loading games...</div>;
    if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

    return (
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {games.map(game => (
                <div key={game.id} className="bg-[#1e293b] text-white rounded-xl p-4 hover:shadow-lg transition">
                    {game.coverImage && (
                        <img
                            src={`http://localhost:1337${game.coverImage.url}`}
                            className="h-40 w-full object-cover rounded"
                            alt={game.name}
                        />
                    )}
                    <h2 className="mt-3 text-purple-400 text-lg font-bold">
                        {game.name}
                    </h2>
                    <p className="text-gray-300 text-sm mt-1">{game.genre}</p>
                </div>
            ))}
        </div>
    );
}
