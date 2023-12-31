
import { Banner } from "../../../fragments/Banner"
import { useEffect, useState } from 'react';
import { searchUser } from '../../RenderFunction/requests/requests.js';

import styles from './styles.module.css'
import { KnowMore } from "../../Buttons";



export const WelcomeSection = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await searchUser();
      setUser(userData);
    };

    fetchUser();
  }, []);

  if (!user) {
    return null;
  }
  return (
    <section className={styles.container}>
      <ul className={styles.sectionWelcomeTitle}>
        <li className={styles.sectionPerfil} >
          <p>{user.username}</p>
        </li>
        <li className="title1_2 convite">
          Bem vindo ao meu portfólio
        </li>
        <li className={styles.paragraph}>{user.bio}</li>
        <KnowMore />
      </ul>
      <li>
        <Banner />
      </li>

    </section>
  )
}