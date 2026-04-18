"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";
import { Apple, Play } from "lucide-react";
import styles from "./Footer.module.css";

/**
 * Disabled social icon — rendered as a button with no action until we have
 * real handles. Keeps the visual without leading users to dead URLs.
 */
function DisabledSocial({ src, alt }) {
  return (
    <span
      className={styles.socialDisabled}
      aria-label={`${alt} (coming soon)`}
      title="Coming soon"
    >
      <Image
        src={src}
        alt={alt}
        width={24}
        height={24}
        className={styles.socialIcon}
      />
    </span>
  );
}

/**
 * Disabled app-store badge — shown as "Coming soon" until the apps ship.
 */
function StoreBadge({ icon: Icon, label, sub }) {
  return (
    <span
      className={styles.storeBadgeDisabled}
      aria-label={`${label} (coming soon)`}
      title="Coming soon"
    >
      <Icon className={styles.storeIcon} aria-hidden="true" />
      <span className={styles.storeText}>
        <span className={styles.storeSub}>{sub}</span>
        <span className={styles.storeLabel}>{label}</span>
      </span>
    </span>
  );
}

export default function Footer() {
  const tNav = useTranslations("Navigation");
  const tFooter = useTranslations("Footer");

  const pathname = usePathname();
  const showFooter = !pathname.startsWith("/auth/");

  if (!showFooter) return null;

  return (
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

      {/* Primary links — only real destinations */}
      <div className={styles.links}>
        <Link href="/travelers" className={styles.link}>
          {tNav("forTravelers")}
        </Link>
        <Link href="/business" className={styles.link}>
          {tNav("forBusinesses")}
        </Link>
        <Link href="/contactUs" className={styles.link}>
          {tNav("contact")}
        </Link>
        <Link href="/auth/signup" className={styles.link}>
          {tNav("getApiAccess")}
        </Link>
      </div>

      {/* App Store badges — disabled until apps ship */}
      <div className={styles.stores}>
        <StoreBadge icon={Apple} label="App Store" sub="Download on the" />
        <StoreBadge icon={Play} label="Google Play" sub="Get it on" />
      </div>

      {/* Social icons — disabled until we have real handles */}
      <div className={styles.socials}>
        <DisabledSocial src="/footer/facebook.svg" alt="Facebook" />
        <DisabledSocial src="/footer/insta.svg" alt="Instagram" />
        <DisabledSocial src="/footer/linkedin.svg" alt="LinkedIn" />
      </div>

      {/* Brand */}
      <div className={styles.brand}>HiNet</div>

      {/* Bottom legal */}
      <div className={styles.bottomBar}>
        <span>{tFooter("rights")}</span>
        <span
          className={styles.link}
          style={{ fontSize: "12px", opacity: 0.6, cursor: "default" }}
          title="Coming soon"
        >
          {tFooter("privacy")}
        </span>
      </div>
    </footer>
  );
}
