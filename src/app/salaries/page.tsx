'use client';

import { useState } from 'react';
import { SalaryFilters } from '@/components/modules/salary-filters/SalaryFilters';
import { CompanySalary } from '@/components/modules/company-salary/CompanySalary';
import salaries from '@/data/salaries.json';

export default function Salaries() {
  const [technologyFilters, setTechnologyFilters] = useState<string[]>([]);
  const [seniorityFilters, setSeniorityFilters] = useState<string[]>([]);

  function handleFilterChange(filter: string, category: 'technology' | 'seniority') {
    switch (category) {
      case 'technology':
        if (technologyFilters.includes(filter)) {
          return setTechnologyFilters((prev) => prev.filter((f) => f !== filter));
        }

        return setTechnologyFilters((prev) => [...prev, filter]);

      case 'seniority':
        if (seniorityFilters.includes(filter)) {
          return setSeniorityFilters((prev) => prev.filter((f) => f !== filter));
        }

        return setSeniorityFilters((prev) => [...prev, filter]);
    }
  }

  const filteredSalaries = salaries.filter((salary) => {
    const hasTechnologyMatch =
      technologyFilters.length === 0 ||
      technologyFilters.every((tech) => salary?.technologies?.includes(tech.toLowerCase()));

    const hasSeniorityMatch =
      seniorityFilters.length === 0 ||
      seniorityFilters.every((seniority) => salary?.seniority?.includes(seniority.toLowerCase()));

    return hasTechnologyMatch && hasSeniorityMatch;
  });

  return (
    <div>
      <SalaryFilters
        onTechnologyChange={(filter: string) => handleFilterChange(filter, 'technology')}
        onSeniorityChange={(filter: string) => handleFilterChange(filter, 'seniority')}
        activeTechnologies={technologyFilters}
        activeSeniorities={seniorityFilters}
      />

      <div className="min-h-[500px]">
        {filteredSalaries?.map((salary) => (
          <CompanySalary data={salary} company={{ name: salary.company }} />
        ))}

        {filteredSalaries.length === 0 && (
          <h1 className="text-center py-60">ანაზღაურებები არ მოიძებნა</h1>
        )}
      </div>
    </div>
  );
}
