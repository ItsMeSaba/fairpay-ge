import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

interface Props {
  image: StaticImageData;
  title: string;
  description?: string;
  reverse?: boolean;
  imageClassName?: string;
}

export function TextAndImage({
  image,
  title,
  description,
  reverse,
  imageClassName,
}: Props) {
  return (
    <div
      className={
        "container grid grid-cols-1 md:grid-cols-2 gap-10 grid-flow-col-reverse"
      }
    >
      <div
        className={clsx(
          "flex flex-col justify-center items-start gap-4",
          reverse && "order-2 pl-10"
        )}
      >
        <h2 className="text-3xl mb-3 underline-gradient">{title}</h2>
        <p className="text-xl leading-8 text-balance">{description}</p>
      </div>

      <div className={imageClassName}>
        <Image src={image} alt="image" />
      </div>
    </div>
  );
}
