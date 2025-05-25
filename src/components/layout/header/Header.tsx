import styles from './styles.module.scss';
import Link from 'next/link';
import MenuIcon from '@/assets/svgs/icons/menu.svg';

interface Args {
  openAuth?: (...args: any) => any;
  openSliderMenu?: (...args: any) => any;
}

export function Header(args: Args) {
  const { openSliderMenu } = args;

  return (
    <header className={styles.header}>
      <div className={styles.websiteName}>
        <Link href="/">
          <h1>Fairpay</h1>
        </Link>

        <h6 className={styles.websiteCategory}>Tech</h6>

        <p className={styles.pill}>DEMO</p>
      </div>

      <div className={styles.search}>{/* <Search /> */}</div>

      <ul className={styles.links}>
        <li>
          <Link href="/salaries">ანაზღაურებები</Link>

          <Link href="/companies">კომპანიები</Link>
        </li>

        {/* <li onClick={openAuth}>
          <AccountCircleRoundedIcon className="text-black" />
        </li> */}
      </ul>

      <div className={styles.burgerButton} onClick={openSliderMenu}>
        <MenuIcon />
      </div>
    </header>
  );
}

// function Links() {
//   return (
//     <ul>
//       <li>
//         <Link href="/salaries">ხელფასები</Link>
//       </li>
//       <li>
//         <Link href="/companies">კომპანიები</Link>
//       </li>
//       <li>
//         <Link href="/technologies">ტექნოლოგიები</Link>
//       </li>
//       <li>{/* <AccountCircleRoundedIcon fontSize="medium" /> */}</li>
//     </ul>
//   );
// }
