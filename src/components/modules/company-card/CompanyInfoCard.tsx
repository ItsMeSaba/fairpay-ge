import styles from './styles.module.scss';
import StarIcon from '@/assets/svgs/icons/star.svg';
import MoneyIcon from '@/assets/svgs/icons/money.svg';
import { CompanyCardBase } from './CompanyCardBase';

export function CompanyInfoCard(props: any) {
  const { vacancyCount, sumOfRatings, reviewCount } = props.company;

  const reviewsExist = sumOfRatings > 0 && reviewCount > 0;
  const calculatedReview = reviewsExist ? sumOfRatings / reviewCount / 20 : 0;

  return (
    <CompanyCardBase company={props.company}>
      <div className={styles.companyInfo}>
        <div className={styles.salaryInfo}>
          <span className={styles.salaryIcon}>
            <MoneyIcon />
          </span>

          <p>{vacancyCount} ანაზღ.</p>
        </div>

        <div className={styles.ratingInfo}>
          <span className={styles.startIcon}>
            <StarIcon />
          </span>

          <p>
            {calculatedReview.toFixed(1)}/5 ({reviewCount})
          </p>
        </div>
      </div>
    </CompanyCardBase>
  );
}
