import getCompanyImage from '@/utils/get-company-image/getCompanyImage';
import styles from './styles.module.scss';
import Image from 'next/image';
import { getCurrency } from '@/utils/get-currency';
import { TechnologyPills } from '@/components/modules/technology-pills/TechnologyPills';

export function CompanySalary(props: any) {
  const { salary, position, date, currency, technologies, seniority } = props.data;
  const { name } = props.company;

  const companyImage = getCompanyImage(name);

  const minimumSalary = salary - 250 > 250 ? salary - 250 : 250;

  return (
    <div className={styles.companySalary} data-hide-company-data={props.hideCompanyData}>
      {!props.hideCompanyData && (
        <div className={styles.image}>
          <Image quality="100" src={companyImage} alt="" />
        </div>
      )}

      <div className={styles.info}>
        {!props.hideCompanyData && <p>{name}</p>}

        <h2 className={styles.position}>
          {position} {seniority ? `(${seniority})` : ''}
        </h2>

        <h5>
          {new Date(date.$date).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })}
        </h5>

        <TechnologyPills technologies={technologies} />
      </div>

      <p className={styles.salary}>
        {minimumSalary} - {salary + 250} {getCurrency(currency)}
      </p>
    </div>
  );
}
