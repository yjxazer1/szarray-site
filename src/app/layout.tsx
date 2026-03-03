import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "亚锐智能科技 | CT & X-RAY检测方案",
  description: "深圳市亚锐智能科技有限公司，专注锂电新能源领域 CT/X-RAY 检测技术与设备研发制造。",
};

const navItems = [
  { href: "/", label: "首页" },
  { href: "/products", label: "产品" },
  { href: "/solutions", label: "解决方案" },
  { href: "/news", label: "新闻" },
  { href: "/about", label: "关于" },
  { href: "/contact", label: "联系" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}>
        <div className="min-h-screen">
          <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-slate-950/85 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <Link href="/" className="text-lg font-semibold tracking-wide text-cyan-300">
                ARRAY
              </Link>
              <nav className="flex gap-6 text-sm text-slate-300">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="transition hover:text-cyan-300">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          <div className="mx-auto max-w-6xl px-6 pt-10">{children}</div>

          <footer className="border-t border-slate-800 py-8">
            <div className="mx-auto max-w-6xl px-6 text-sm text-slate-400">
              © {new Date().getFullYear()} 深圳市亚锐智能科技有限公司 · 粤ICP备2021045003号
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
