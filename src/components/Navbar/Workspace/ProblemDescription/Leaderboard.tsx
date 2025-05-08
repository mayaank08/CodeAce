import { LeaderboardEntry } from "@/utils/types/problem";
import { FaMedal } from "react-icons/fa";

interface LeaderboardProps {
    entries: LeaderboardEntry[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ entries }) => {
    const getRankColor = (rank: number) => {
        switch (rank) {
            case 1:
                return "text-yellow-400";
            case 2:
                return "text-gray-400";
            case 3:
                return "text-amber-600";
            default:
                return "text-gray-500";
        }
    };

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {entries.slice(0, 3).map((entry, index) => (
                    <div key={entry.userId} className="bg-dark-layer-2 p-4 rounded-lg">
                        <div className="flex items-center justify-center mb-2">
                            <FaMedal className={`text-2xl ${getRankColor(index + 1)}`} />
                        </div>
                        <div className="text-center">
                            <h3 className="text-white font-medium">{entry.userName}</h3>
                            <p className="text-gray-400">Rank #{index + 1}</p>
                            <div className="mt-2 space-y-1">
                                <p className="text-gray-300">Points: {entry.points}</p>
                                <p className="text-gray-300">Solved: {entry.problemsSolved}</p>
                                <p className="text-gray-300">Streak: {entry.streakDays} days</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-dark-layer-2 rounded-lg overflow-hidden">
                <table className="w-full">
                    <thead className="bg-dark-layer-3">
                        <tr>
                            <th className="px-4 py-2 text-left text-gray-300">Rank</th>
                            <th className="px-4 py-2 text-left text-gray-300">User</th>
                            <th className="px-4 py-2 text-left text-gray-300">Points</th>
                            <th className="px-4 py-2 text-left text-gray-300">Solved</th>
                            <th className="px-4 py-2 text-left text-gray-300">Streak</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries.slice(3).map((entry) => (
                            <tr key={entry.userId} className="border-t border-dark-layer-3">
                                <td className="px-4 py-2 text-gray-300">#{entry.rank}</td>
                                <td className="px-4 py-2 text-white">{entry.userName}</td>
                                <td className="px-4 py-2 text-gray-300">{entry.points}</td>
                                <td className="px-4 py-2 text-gray-300">{entry.problemsSolved}</td>
                                <td className="px-4 py-2 text-gray-300">{entry.streakDays} days</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Leaderboard; 