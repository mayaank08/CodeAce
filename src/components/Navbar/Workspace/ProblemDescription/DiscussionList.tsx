import { Discussion } from "@/utils/types/problem";
import { FaThumbsUp, FaReply } from "react-icons/fa";
import { useState } from "react";

interface DiscussionListProps {
    discussions: Discussion[];
    onVote: (discussionId: string) => void;
    onReply: (discussionId: string, content: string) => void;
}

const DiscussionList: React.FC<DiscussionListProps> = ({ discussions, onVote, onReply }) => {
    const [replyingTo, setReplyingTo] = useState<string | null>(null);
    const [replyContent, setReplyContent] = useState("");

    return (
        <div className="space-y-6">
            {discussions.map((discussion) => (
                <div key={discussion.id} className="bg-dark-layer-2 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-white font-medium">{discussion.userName}</h3>
                            <p className="text-gray-300 mt-2">{discussion.content}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button 
                                onClick={() => onVote(discussion.id)}
                                className="flex items-center gap-1 text-gray-400 hover:text-white"
                            >
                                <FaThumbsUp />
                                <span>{discussion.votes}</span>
                            </button>
                            <button 
                                onClick={() => setReplyingTo(discussion.id)}
                                className="flex items-center gap-1 text-gray-400 hover:text-white"
                            >
                                <FaReply />
                                <span>Reply</span>
                            </button>
                        </div>
                    </div>

                    {replyingTo === discussion.id && (
                        <div className="mt-4">
                            <textarea
                                value={replyContent}
                                onChange={(e) => setReplyContent(e.target.value)}
                                className="w-full bg-dark-layer-3 text-white rounded-lg p-2"
                                rows={3}
                                placeholder="Write your reply..."
                            />
                            <div className="flex justify-end gap-2 mt-2">
                                <button 
                                    onClick={() => setReplyingTo(null)}
                                    className="px-4 py-2 text-gray-400 hover:text-white"
                                >
                                    Cancel
                                </button>
                                <button 
                                    onClick={() => {
                                        onReply(discussion.id, replyContent);
                                        setReplyContent("");
                                        setReplyingTo(null);
                                    }}
                                    className="px-4 py-2 bg-dark-blue-s text-white rounded-lg hover:bg-dark-blue-s/80"
                                >
                                    Reply
                                </button>
                            </div>
                        </div>
                    )}

                    {discussion.replies.length > 0 && (
                        <div className="mt-4 space-y-4">
                            {discussion.replies.map((reply) => (
                                <div key={reply.id} className="ml-8 bg-dark-layer-3 rounded-lg p-3">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="text-white font-medium">{reply.userName}</h4>
                                            <p className="text-gray-300 mt-1">{reply.content}</p>
                                        </div>
                                        <button 
                                            onClick={() => onVote(reply.id)}
                                            className="flex items-center gap-1 text-gray-400 hover:text-white"
                                        >
                                            <FaThumbsUp />
                                            <span>{reply.votes}</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default DiscussionList; 