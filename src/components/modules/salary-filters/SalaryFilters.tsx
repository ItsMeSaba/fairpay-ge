import styles from './styles.module.scss';
import technologies from '@/data/technologies.json';
import seniorities from '@/data/seniorities.json';

export function SalaryFilters({
  activeTechnologies,
  activeSeniorities,
  onTechnologyChange,
  onSeniorityChange,
}: any) {
  return (
    <div className={styles.filtration}>
      <div className={styles.filtersRow}>
        {technologies.map((tech) => (
          <FiltrationButton
            text={tech}
            key={tech}
            isActive={activeTechnologies.includes(tech)}
            onClick={() => onTechnologyChange(tech)}
          />
        ))}
      </div>

      <div className={styles.filtersRow}>
        {seniorities.map((seniority) => (
          <FiltrationButton
            text={seniority}
            key={seniority}
            isActive={activeSeniorities.includes(seniority)}
            onClick={() => onSeniorityChange(seniority)}
          />
        ))}
      </div>
    </div>
  );
}

interface FiltrationButtonProps {
  text: string;
  isActive?: boolean;
  onClick: () => void;
}

export function FiltrationButton(props: FiltrationButtonProps) {
  const { text, isActive, onClick } = props;

  return (
    <button
      onClick={onClick}
      className={`${styles.filtrationButton} ${isActive && styles.activeFiltrationButton}`}
    >
      {text}
    </button>
  );
}
