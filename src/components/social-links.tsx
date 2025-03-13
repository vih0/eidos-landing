import Link from "next/link";

export function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors text-gray-700"
        aria-label={label}
      >
        {icon}
      </Link>
    )
  }
  