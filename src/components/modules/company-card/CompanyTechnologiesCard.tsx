import { CompanyCardBase } from './CompanyCardBase';

export function CompanyTechnologiesCard(args: any) {
  const { technologies } = args.company;

  if (!technologies || technologies.length === 0) return null;

  return (
    <CompanyCardBase company={args.company}>
      {/* <Technologies technologies={technologies} /> */}
    </CompanyCardBase>
  );
}
