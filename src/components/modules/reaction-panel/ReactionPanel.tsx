import ThumbsUpIcon from '@/assets/svgs/icons/thumbs-up.svg';
import ThumbsDownIcon from '@/assets/svgs/icons/thumbs-down.svg';
import { useState } from 'react';

export function ReactionPanel() {
  const [userReaction, setUserReaction] = useState<'like' | 'dislike' | null>(null);

  return (
    <div className="flex items-center gap-2">
      <button onClick={() => setUserReaction((reaction) => (reaction === 'like' ? null : 'like'))}>
        <ThumbsUpIcon className={userReaction === 'like' ? 'text-green-600' : 'text-black'} />
      </button>

      <button
        onClick={() => setUserReaction((reaction) => (reaction === 'dislike' ? null : 'dislike'))}
      >
        <ThumbsDownIcon className={userReaction === 'dislike' ? 'text-red-500' : 'text-black'} />
      </button>
    </div>
  );
}
