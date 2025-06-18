'use client';

import { CompanyReview } from '@/components/modules/company-review/CompanyReview';
import reviews from '@/data/reviews.json';

export function CompanyReviews(props: any) {
  const { company } = props;
  const companyReviews = reviews.filter((review) => review.companyId === company._id.$oid);

  return (
    <div className="py-4">
      {companyReviews?.length > 0 && (
        <p className="bg-white w-fit py-2 px-3 mx-auto rounded-md">დემო ინფორმაცია</p>
      )}

      {companyReviews?.map((review, index) => (
        <CompanyReview key={index} review={review} />
      ))}

      {companyReviews.length === 0 && (
        <h1 className="text-white text-center py-60">შეფასებები არ მოიძებნა</h1>
      )}
    </div>
  );
}
