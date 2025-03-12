import Image from 'next/image';
import styles from './page.module.css';
import { Container, Text } from '@mantine/core';

export default function Home() {
  return (
    <Container w="md" mih="100vh">
      <Image className={styles.logo} src="/logo_light.png" alt="The Tech Logo" width={832} height={745}/>
    </Container>
  )
}
