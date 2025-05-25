'use client';

import salaries from '@/data/salaries.json';
import seniorities from '@/data/seniorities.json';
import technologies from '@/data/technologies.json';
import { CompanySalary } from '@/components/modules/company-salary/CompanySalary';
import { FiltrationModule } from '@/components/modules/filtration-module/FiltrationModule';
import { useState } from 'react';

const technologyFilterOptions = technologies.map((technology) => ({
  label: technology,
  value: technology,
}));

const seniorityFilterOptions = seniorities.map((seniority) => ({
  label: seniority,
  value: seniority,
}));

export default function Salaries() {
  const [technologyFilters, setTechnologyFilters] = useState<string[]>([]);
  const [seniorityFilters, setSeniorityFilters] = useState<string[]>([]);

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
      <div className="container my-0 py-0 flex gap-2">
        <FiltrationModule
          options={technologyFilterOptions}
          label="Technology"
          appliedOptions={technologyFilters}
          onApply={(selected) => setTechnologyFilters(selected)}
        />

        <FiltrationModule
          options={seniorityFilterOptions}
          label="Seniority"
          displaySearch={false}
          appliedOptions={seniorityFilters}
          onApply={(selected) => setSeniorityFilters(selected)}
        />
      </div>

      <div className="min-h-[500px]">
        {filteredSalaries?.map((salary) => (
          <CompanySalary key={salary._id.$oid} data={salary} company={{ name: salary.company }} />
        ))}

        {filteredSalaries.length === 0 && (
          <h1 className="text-center py-60">ანაზღაურებები არ მოიძებნა</h1>
        )}
      </div>
    </div>
  );
}
