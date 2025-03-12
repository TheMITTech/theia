"use client";

import { Anchor, Container, Group, Text } from '@mantine/core';
import Link from 'next/link';

import styles from './footer.module.css';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container className={styles.inner}>
        <Anchor<'a'> href="/" c="dimmed">
          © {2025} The Tech
        </Anchor>
        <Group className={styles.links}>
          <Anchor href="/" component={Link} c="dimmed">
            Photo Form
          </Anchor>
          <Anchor href="/photos" component={Link} c="dimmed">
            All Photos
          </Anchor>
          <Anchor<'a'>
            c="dimmed"
            href="https://github.com/TheMITTech/theia"
            target="_blank"
          >
            Github
          </Anchor>
        </Group>
      </Container>
    </div>
  );
};

export default Footer;
