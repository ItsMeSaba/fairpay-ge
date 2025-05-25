'use client';

import styles from './styles.module.scss';
import Image from 'next/image';
// import CompanySalaries from 'layouts/company/companySalaries';
// import CompanyReviews from 'layouts/company/companyReviews';
import { useEffect, useState } from 'react';
// import AddSalaryButton from 'components/buttons/AddSalaryButton';
// import AddReviewButton from 'components/buttons/AddReviewButton';
import CompanyHeroWave from '@/assets/svgs/waves/company-hero-wave.svg';
import companies from '@/data/companies.json';
import { useSearchParams } from 'next/navigation';
import { getCompanyImage } from '@/utils/get-company-image/getCompanyImage';
import { CompanySalaries } from '@/components/sections/company-salaries/CompanySalaries';
import { CompanyReviews } from '@/components/sections/company-reviews/CompanyReviews';

export default function CompanyPage() {
  const [companyData, setCompanyData] = useState<any>(null);
  const [display, setDsiplay] = useState<'salaries' | 'reviews' | 'interviews'>('salaries');
  const searchParams = useSearchParams();
  const image = companyData ? getCompanyImage(companyData.name) : null;

  useEffect(() => {
    const companyUrlName = window.location.pathname.split('/').pop();

    const company = companies.find((company) => company.urlName === companyUrlName);

    setCompanyData(company);
  }, [searchParams]);

  if (!companyData) return false;

  return (
    <div className={styles.page}>
      <div className={styles.company}>
        <div className={styles.image}>{image && <Image src={image} alt="company image" />}</div>

        <div className={styles.center}>
          <h1 className={styles.companyName}>{companyData?.name}</h1>

          <div className={styles.companyResults}></div>

          <div className={styles.buttons}>
            <div
              className={`${styles.salariesCount} ${display === 'salaries' ? styles.active : ''}`}
              onClick={() => setDsiplay('salaries')}
            >
              {companyData.vacancyCount} ანაზღაურება
            </div>
            <div
              className={`${styles.ratingsCount} ${display === 'reviews' ? styles.active : ''}`}
              onClick={() => setDsiplay('reviews')}
            >
              {companyData.reviewCount} შეფასება
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        {/* <div className={style.addDataButtonsPlaceHolder}>
          <div></div>

          <div className={style.addDataButtons}>
            <AddSalaryButton
              customStyle={{ backgroundColor: `#${companyData?.color}FF` }}
              companyName={companyData.name}
              companyId={companyData._id}
              displayLongName={true}
            />
            <AddReviewButton
              customStyle={{ backgroundColor: `#${companyData?.color}FF` }}
              companyName={companyData.name}
              companyId={companyData._id}
              displayLongName={true}
            />
          </div>
        </div> */}

        <div
          className={styles.upperWave}
          style={{
            backgroundColor: companyData?.color ? `#${companyData.color}BB` : '#b2bec3',
          }}
        >
          <CompanyHeroWave />
        </div>

        <div
          style={{ backgroundColor: companyData?.color ? `#${companyData.color}BB` : '#b2bec3' }}
        >
          {companyData._id && (
            <>
              {display === 'salaries' && <CompanySalaries company={companyData} />}
              {display === 'reviews' && <CompanyReviews company={companyData} />}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
