import companyImages, { companyImages2 } from './companyImages';
import noImage from '@/public/companies/noimage.jpg';

export default function getCompanyImagePath(companyName: string) {
  const companyImageData = Object.values(companyImages);

  for (let i = 0; i < companyImageData.length; i++) {
    if (companyImageData[i].names.includes(companyName)) {
      return companyImageData[i].image;
    }
  }

  return noImage;
}

/**
 * Returns src of company image or default image for not found
 */
export function getCompanyImage(companyName: any) {
  return companyImages2[companyName] ?? noImage;
}
