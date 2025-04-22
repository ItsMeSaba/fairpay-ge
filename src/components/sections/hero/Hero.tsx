import style from './styles.module.scss';
import BlobOne from '@/assets/svgs/blobs/blob-one.svg';
import BlobTwo from '@/assets/svgs/blobs/blob-two.svg';
import bussinesMan from '@/assets/images/business-man.png';
import HeroWave from '@/assets/svgs/waves/hero-wave.svg';
import Image from 'next/image';

export function Hero() {
  return (
    <div className={style.container}>
      <div className={style.blobOne}>
        <BlobOne />
      </div>

      <div className={style.blobTwo}>
        <BlobTwo />
      </div>

      <div className={style.content}>
        <h1 className={style.title}>
          იცოდე შენი
          <span className={style.bigText}>ფასი</span>
        </h1>
      </div>

      <div className={style.avatar}>
        <Image
          quality={80}
          src={bussinesMan}
          alt="https://icons8.com/illustrations/style--business-3d"
        />
      </div>

      <div className={style.wave}>
        <HeroWave />
      </div>
    </div>
  );
}
