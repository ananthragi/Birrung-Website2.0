import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";
import { credits } from "@/lib/content";
import { email, phoneDisplay, phoneHref, states } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="logo" href="/#home" aria-label="Birrung">
              <LogoMark />
            </Link>
            <p>Digital signage, simplified.</p>
            <h3 className="footer-subhead">Get in touch</h3>
            <ul>
              <li><a href={`mailto:${email}`}>{email}</a></li>
              {/* <li><a href={phoneHref}>{phoneDisplay}</a></li> */}
              <li>
                New location Coming Soon
                {/* <br />
                Silicon Valley, CA */}
              </li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li><a href="/#about">About us</a></li>
              {/* <li><Link href="/careers">Careers</Link></li> */}
              {/* <li><Link href="/blog">Blog</Link></li> */}
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3>Product</h3>
            <ul>
              <li><a href="/#solution">Features</a></li>
              <li><a href="/#pricing">Pricing</a></li>
              <li><a href="/#venues">Case studies</a></li>
              <li><a href="/#analytics">Analytics</a></li>
              <li><a href="/#reviews">Reviews</a></li>
            </ul>

          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms and Conditions</Link></li>
              <li><Link href="/cookies">Cookie Policy</Link></li>
            </ul>

          </div>
        </div>
        <div className="ack">
          <div className="flags">
            <svg viewBox="0 0 90 60" role="img" aria-label="Aboriginal flag">
              <rect width="90" height="30" fill="#000" />
              <rect y="30" width="90" height="30" fill="#C8102E" />
              <circle cx="45" cy="30" r="14" fill="#FFCD00" />
            </svg>
            <svg viewBox="0 0 120 80" role="img" aria-label="Torres Strait Islander flag">
              <rect width="120" height="20" fill="#009B3A" />
              <rect y="20" width="120" height="40" fill="#00205B" />
              <rect y="60" width="120" height="20" fill="#009B3A" />
              <path fill="#fff" d="M60 26c10 1 18 10 19 18h-6c-1-5-6-11-13-12-7 1-12 7-13 12h-6c1-8 9-17 19-18z" />
              <path fill="#fff" d="M57 42h6v5h-6z" />
              <polygon fill="#fff" points="60,49 62.1,54.6 68.2,54.6 63.3,58.1 65.2,63.8 60,60.2 54.8,63.8 56.7,58.1 51.8,54.6 57.9,54.6" />
            </svg>
            <svg viewBox="0 0 120 80" role="img" aria-label="Pride flag">
              <rect width="120" height="13.4" y="0" fill="#E40303" />
              <rect width="120" height="13.3" y="13.4" fill="#FF8C00" />
              <rect width="120" height="13.3" y="26.7" fill="#FFED00" />
              <rect width="120" height="13.3" y="40" fill="#008026" />
              <rect width="120" height="13.3" y="53.3" fill="#24408E" />
              <rect width="120" height="13.4" y="66.6" fill="#732982" />
            </svg>
          </div>
          <p>
            Birrung acknowledges the Traditional Custodians of this beautiful land. We acknowledge their ancestors, &amp; Elders and recognize those who continue to protect and promote Aboriginal &amp; Torres Strait Islander cultures. We acknowledge the past &amp; stand together for our future.
          </p>
        </div>
        <div className="legal-line">
          <span>© {new Date().getFullYear()} Birrung. All rights reserved.</span>

        </div>
      </div>
    </footer>
  );
}
