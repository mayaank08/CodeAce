import { UserAnalytics } from "@/utils/types/problem";
import { Line, Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

interface AnalyticsProps {
    analytics: UserAnalytics;
}

const Analytics: React.FC<AnalyticsProps> = ({ analytics }) => {
    const difficultyData = {
        labels: ['Easy', 'Medium', 'Hard'],
        datasets: [
            {
                data: [
                    analytics.difficultyBreakdown.easy,
                    analytics.difficultyBreakdown.medium,
                    analytics.difficultyBreakdown.hard,
                ],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const progressData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Problems Solved',
                data: [4, 8, 12, 15],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-dark-layer-2 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">Overall Stats</h3>
                    <div className="space-y-2">
                        <div className="flex justify-between text-gray-300">
                            <span>Problems Solved</span>
                            <span>{analytics.problemsSolved}</span>
                        </div>
                        <div className="flex justify-between text-gray-300">
                            <span>Success Rate</span>
                            <span>{analytics.successRate}%</span>
                        </div>
                        <div className="flex justify-between text-gray-300">
                            <span>Current Streak</span>
                            <span>{analytics.streakDays} days</span>
                        </div>
                    </div>
                </div>

                <div className="bg-dark-layer-2 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">Time Analysis</h3>
                    <div className="space-y-2">
                        <div className="flex justify-between text-gray-300">
                            <span>Total Time</span>
                            <span>{Math.round(analytics.totalTimeSpent / 60)}h</span>
                        </div>
                        <div className="flex justify-between text-gray-300">
                            <span>Avg Time/Problem</span>
                            <span>{Math.round(analytics.averageTimePerProblem)}m</span>
                        </div>
                    </div>
                </div>

                <div className="bg-dark-layer-2 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">Achievements</h3>
                    <div className="space-y-2">
                        <div className="flex justify-between text-gray-300">
                            <span>Rank</span>
                            <span>{analytics.rank}</span>
                        </div>
                        <div className="flex justify-between text-gray-300">
                            <span>Points</span>
                            <span>{analytics.points}</span>
                        </div>
                        <div className="flex justify-between text-gray-300">
                            <span>Badges</span>
                            <span>{analytics.badges.length}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-dark-layer-2 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-4">Progress Over Time</h3>
                    <Line 
                        data={progressData}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'top' as const,
                                    labels: {
                                        color: 'white'
                                    }
                                }
                            },
                            scales: {
                                y: {
                                    ticks: {
                                        color: 'white'
                                    }
                                },
                                x: {
                                    ticks: {
                                        color: 'white'
                                    }
                                }
                            }
                        }}
                    />
                </div>

                <div className="bg-dark-layer-2 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-4">Difficulty Distribution</h3>
                    <Doughnut 
                        data={difficultyData}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'top' as const,
                                    labels: {
                                        color: 'white'
                                    }
                                }
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Analytics; 