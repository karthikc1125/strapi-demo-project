import { useEffect, useState } from "react";
import axios from "axios";

export default function Items() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:1337/api/items?populate=*")
            .then(res => {
                setItems(res.data.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="p-8 text-center text-white">Loading items...</div>;

    return (
        <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            {items.map(item => (
                <div key={item.id} className="bg-[#1e293b] text-white rounded-xl p-4 hover:shadow-lg transition border border-gray-700">
                    {item.image && (
                        <img
                            src={`http://localhost:1337${item.image.url}`}
                            className="h-32 w-full object-contain bg-gray-900 rounded mb-3"
                            alt={item.name}
                        />
                    )}
                    <div className="flex justify-between items-start">
                        <h2 className="text-lg font-bold">{item.name}</h2>
                        <span className={`text-xs px-2 py-1 rounded font-bold uppercase
              ${item.rarity === 'Legendary' ? 'bg-orange-500 text-white' : ''}
              ${item.rarity === 'Epic' ? 'bg-purple-600 text-white' : ''}
              ${item.rarity === 'Rare' ? 'bg-blue-500 text-white' : ''}
              ${item.rarity === 'Common' ? 'bg-gray-500 text-white' : ''}
            `}>
                            {item.rarity}
                        </span>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">{item.type}</p>
                    <p className="text-gray-300 text-sm mt-2 italic">{item.ability}</p>
                </div>
            ))}
        </div>
    );
}
