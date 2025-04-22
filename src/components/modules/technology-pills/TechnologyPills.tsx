import styles from './styles.module.scss';

interface Props {
  technologies: string[];
}

export function TechnologyPills({ technologies }: Props) {
  if (!technologies || technologies.length === 0) return false;

  return (
    <div className={styles.technologies}>
      {technologies.map((technology: string) => (
        <div className={styles.technology} key={technology}>
          {technology}
        </div>
      ))}
    </div>
  );
}
