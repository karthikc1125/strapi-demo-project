import { useEffect, useState } from "react";
import axios from "axios";

export default function Characters() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:1337/api/characters?populate=*")
            .then(res => {
                setCharacters(res.data.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="p-8 text-center text-white">Loading characters...</div>;

    return (
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {characters.map(char => (
                <div key={char.id} className="bg-[#1e293b] text-white rounded-xl p-4 hover:shadow-lg transition">
                    {char.image && (
                        <img
                            src={`http://localhost:1337${char.image.url}`}
                            className="h-64 w-full object-cover rounded"
                            alt={char.name}
                        />
                    )}
                    <h2 className="mt-3 text-purple-400 text-lg font-bold">
                        {char.name}
                    </h2>
                    <p className="text-gray-300 font-medium">{char.role}</p>
                </div>
            ))}
        </div>
    );
}
