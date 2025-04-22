import { getCompanyCoverImage } from '@/utils/get-company-cover-image/getCompanyCoverImage';
import { getCompanyImage } from '@/utils/get-company-image/getCompanyImage';
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export function CompanyCardBase(args: any) {
  const { children, company } = args;
  const { name, urlName, color } = company;
  const image = getCompanyImage(name as any);
  const coverImage = getCompanyCoverImage(name);

  return (
    <div className={styles.companyCardBase}>
      <Link href={`/companies/${urlName}`}>
        <div className={styles.card}>
          <div className={styles.top}>
            {coverImage && (
              <div
                className={styles.coverImage}
                style={{ backgroundImage: `url(${coverImage.src})` }}
              />
            )}

            {!coverImage && (
              <div className={styles.noImage} style={{ backgroundColor: `#${color}` }}></div>
            )}

            <div className={styles.companyImage}>
              <Image quality={30} src={image} alt={name} />
            </div>

            <h2 className={styles.companyName} title={name}>
              {name}
            </h2>
          </div>

          <div className={styles.bottom}>{children}</div>
        </div>
      </Link>
    </div>
  );
}
