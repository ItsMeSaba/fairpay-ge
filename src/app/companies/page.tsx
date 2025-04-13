// import style from 'styles/pages/companies.module.sass';
import { CompanyInfoCard } from '@/components/modules/company-card/CompanyInfoCard';
import companies from '@/data/companies.json';

export default function Index() {
  // const { companies: fetchedCompanies } = args;
  // const [companies, setCompanies] = useState(companiesArrayToOject(fetchedCompanies));
  // const [companies, setCompanies] = useState([]);
  // const [salaryPopup, setSalaryPopup] = useState(popupData());
  // const [reviewPopup, setReviewPopup] = useState(popupData());
  // const [addCompanyPopup, setAddCompanyPopup] = useState(false);
  // const { openReviewPopup, openSalaryPopup } = useContext(GlobalContext);

  return (
    <div>
      {/* {addCompanyPopup && (
        <AddCompanyPopup closePopup={() => setAddCompanyPopup(false)} />
      )}

      <button
        className={style.addCompanyButton}
        onClick={() => setAddCompanyPopup(true)}
      >
        კომპანიის დამატება
      </button> */}

      {/* <Companies companies={companiesArray as any} /> */}
      <div className="flex flex-wrap gap-2 mx-auto justify-center">
        {companies.map((company) => (
          <CompanyInfoCard key={company.name} company={company} />
        ))}
      </div>
    </div>
  );
}
