export type Example = {
	id: number;
	inputText: string;
	outputText: string;
	explanation?: string;
	img?: string;
};

// local problem data
export type Problem = {
	id: string;
	title: string;
	problemStatement: string;
	examples: Example[];
	constraints: string;
	order: number;
	starterCode: string;
	handlerFunction: ((fn: any) => boolean) | string;
	starterFunctionName: string;
};

export type DBProblem = {
	id: string;
	title: string;
	category: string;
	difficulty: string;
	likes: number;
	dislikes: number;
	order: number;
	videoId?: string;
	link?: string;
};

export type Discussion = {
	id: string;
	problemId: string;
	userId: string;
	userName: string;
	content: string;
	votes: number;
	createdAt: Date;
	replies: Reply[];
};

export type Reply = {
	id: string;
	discussionId: string;
	userId: string;
	userName: string;
	content: string;
	votes: number;
	createdAt: Date;
};

export type UserAnalytics = {
	userId: string;
	problemsSolved: number;
	totalTimeSpent: number;
	averageTimePerProblem: number;
	successRate: number;
	difficultyBreakdown: {
		easy: number;
		medium: number;
		hard: number;
	};
	streakDays: number;
	points: number;
	rank: string;
	badges: Badge[];
};

export type Badge = {
	id: string;
	name: string;
	description: string;
	icon: string;
	unlockedAt: Date;
};

export type LeaderboardEntry = {
	userId: string;
	userName: string;
	points: number;
	rank: number;
	problemsSolved: number;
	streakDays: number;
};