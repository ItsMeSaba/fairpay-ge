import StarIcon from '@/assets/svgs/icons/star.svg';
import StarHalfIcon from '@/assets/svgs/icons/star-half.svg';
import StarEmptyIcon from '@/assets/svgs/icons/star-empty.svg';

interface Props {
  rating: number;
}

export function Stars({ rating }: Props) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <StarIcon className="text-yellow-500" key={`full-${i}`} />
      ))}

      {hasHalfStar && <StarHalfIcon className="text-yellow-500" />}

      {[...Array(emptyStars)].map((_, i) => (
        <StarEmptyIcon className="text-yellow-500" key={`empty-${i}`} />
      ))}
    </div>
  );
}
