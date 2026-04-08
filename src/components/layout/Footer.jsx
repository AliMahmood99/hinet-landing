"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const tNav = useTranslations("Navigation");
  const tFooter = useTranslations("Footer");

  const pathname = usePathname();
  const noFooterPages = ["/auth/signin", "/auth/signup"];
  const showFooter = !noFooterPages.includes(pathname);

  return showFooter ? (
    <footer className={styles.footer}>
      {/* Background Shapes */}
      <Image
        src="/footer/circle.svg"
        alt=""
        width={300}
        height={300}
        className={styles.circleTopRight}
      />
      <Image
        src="/footer/circle1.svg"
        alt=""
        width={300}
        height={300}
        className={styles.circleBottomLeft}
      />

      {/* Links Section */}
      <div className={styles.links}>
        <Link href="/travelers" className={styles.link}>
          {tNav("forTravelers")}
        </Link>
        <Link href="/business" className={styles.link}>
          {tNav("forBusinesses")}
        </Link>
        <Link href="/contact" className={styles.link}>
          {tNav("contact")}
        </Link>
        <Link href="/get-app" className={styles.link}>
          {tNav("getApp")}
        </Link>
        <Link href="/api-access" className={styles.link}>
          {tNav("getApiAccess")}
        </Link>
      </div>

      {/* Social Icons Section */}
      <div className={styles.socials}>
        <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
          <Image
            src="/footer/facebook.svg"
            alt="Facebook"
            width={24}
            height={24}
            className={styles.socialIcon}
          />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          aria-label="Instagram"
        >
          <Image
            src="/footer/insta.svg"
            alt="Instagram"
            width={24}
            height={24}
            className={styles.socialIcon}
          />
        </Link>
        <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <Image
            src="/footer/linkedin.svg"
            alt="LinkedIn"
            width={24}
            height={24}
            className={styles.socialIcon}
          />
        </Link>
      </div>

      {/* Brand Section */}
      <div className={styles.brand}>HiNet</div>

      {/* Bottom Legal Section */}
      <div className={styles.bottomBar}>
        <span>{tFooter("rights")}</span>
        <Link
          href="/privacy"
          className={styles.link}
          style={{ fontSize: "12px" }}
        >
          {tFooter("privacy")}
        </Link>
      </div>
    </footer>
  ) : (
    ""
  );
}
