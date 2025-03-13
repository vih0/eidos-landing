import Link from "next/link"

export function NavLink({
    href,
    children,
    onClick,
    isScrolled,
  }: {
    href: string
    children: React.ReactNode
    onClick?: () => void
    isScrolled: boolean
  }) {
    return (
      <Link
        href={href}
        className={`transition-colors text-base lg:text-lg ${
          isScrolled ? "text-gray-800 hover:text-gray-600" : "text-white hover:text-gray-300"
        }`}
        onClick={onClick}
      >
        {children}
      </Link>
    )
  }
  