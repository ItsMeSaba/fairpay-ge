import companyCoverImages from './companyCoverImages';

/**
 * Returns src of company image or default image for not found
 */
export function getCompanyCoverImage(companyName: string) {
  return companyCoverImages[companyName] ?? null;
}
