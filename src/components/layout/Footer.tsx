import Image from 'next/image';

export const Footer = () => {
  const links = [
    { name: "サービス・料金", href: "#service" },
    { name: "会員登録", href: "#register" },
    { name: "ログイン", href: "#login" },
    { name: "運営会社", href: "#company" },
    { name: "利用規約", href: "#terms" },
    { name: "会社概要", href: "#about" }
  ];

  return (
    <footer className="bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="h-12 relative w-48">
            <Image
              src="/images/logo.png"
              alt="Find Model Circle"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <nav className="flex flex-wrap justify-center gap-8">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Find Model Circle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}; 