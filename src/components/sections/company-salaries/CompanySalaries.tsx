'use client';

import { CompanySalary } from '@/components/modules/company-salary/CompanySalary';
import salaries from '@/data/salaries.json';

export function CompanySalaries(props: any) {
  const { company } = props;
  const companySalaries = salaries.filter((salary) => salary.companyId?.$oid === company._id.$oid);

  return (
    <div className="py-4">
      {companySalaries?.map((salary, index) => (
        <CompanySalary key={index} data={salary} company={company} hideCompanyData={true} />
      ))}

      {companySalaries.length === 0 && (
        <h1 className="text-white text-center py-60">ანაზღაურებები არ მოიძებნა</h1>
      )}
    </div>
  );
}
