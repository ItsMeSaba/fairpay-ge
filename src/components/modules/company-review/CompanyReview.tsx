import { ReactionPanel } from '../reaction-panel/ReactionPanel';
import { Stars } from '../stars/Stars';
import styles from './styles.module.scss';
import AccountCircleIcon from '@/assets/svgs/icons/account-circle.svg';

interface Props {
  review: any;
}

export function CompanyReview(props: Props) {
  let {
    rating,
    positiveReview,
    negativeReview,
    position,
    _id,
    userReaction,
    likeDislikeDifference,
  } = props.review;

  return (
    <div className={styles.review}>
      <div className={styles.user}>
        <div className={styles.icon}>
          <AccountCircleIcon />
        </div>

        <div className={styles.info}>
          <div className={styles.position}>{position}</div>

          <div className={styles.rating}>
            <Stars rating={rating} />
          </div>
        </div>
      </div>

      {positiveReview.length > 0 && <p className={styles.positiveReview}>{positiveReview}</p>}

      {negativeReview.length > 0 && <p className={styles.negativeReview}>{negativeReview}</p>}

      <ReactionPanel />
    </div>
  );
}
