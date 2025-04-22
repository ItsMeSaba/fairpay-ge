import { CompanyInfoCard } from '@/components/modules/company-card/CompanyInfoCard';
import companies from '@/data/companies.json';

export default function Index() {
  return (
    <div>
      <div className="flex flex-wrap gap-1 mx-auto justify-center md:justify-between w-[95%]">
        {companies.map((company) => (
          <CompanyInfoCard key={company.name} company={company} />
        ))}
      </div>
    </div>
  );
}
