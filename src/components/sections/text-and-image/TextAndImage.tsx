import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';

interface Props {
  image: StaticImageData;
  title: string;
  description?: string;
  reverse?: boolean;
  imageClassName?: string;
  theme?: 'light' | 'light-red';
}

export function TextAndImage({ image, title, description, reverse, imageClassName, theme }: Props) {
  return (
    <div className={clsx('w-full', theme === 'light-red' && 'bg-[#ed4c6715]')}>
      <div className={'container grid grid-cols-1 md:grid-cols-2 gap-10 grid-flow-col-reverse'}>
        <div
          className={clsx(
            'flex flex-col justify-center items-start gap-4',
            reverse && 'md:order-2 md:pl-10'
          )}
        >
          <h2 className="text-3xl mb-3 underline-gradient max-w-[300px] md:max-w-none">{title}</h2>
          <p className="text-xl leading-8">{description}</p>
        </div>

        <div className={clsx('mx-auto', imageClassName)}>
          <Image src={image} alt="image" />
        </div>
      </div>
    </div>
  );
}
