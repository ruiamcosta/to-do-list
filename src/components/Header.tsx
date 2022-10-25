import rocketImg from '../assets/rocket.svg';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketImg} alt="Image of a rocket" />
      <div className={styles.todo}>
        <span className={styles.to}>to</span><span className={styles.do}>do</span>
      </div>
    </header>
  )
}