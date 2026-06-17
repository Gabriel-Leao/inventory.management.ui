import { cn } from '@/lib/utils/cn'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type SidebarLinkProps = {
  href: string
  icon: LucideIcon
  label: string
  isCollapsed: boolean
}

export const SidebarLink = ({ href, icon: Icon, label, isCollapsed }: SidebarLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href}>
      <div
        className={cn(
          'flex cursor-pointer items-center justify-start gap-3 px-8 py-4 transition-colors hover:bg-blue-100 hover:text-blue-500',
          isCollapsed && 'justify-center px-0',
          isActive && 'bg-blue-200 text-white',
        )}>
        <Icon className='h-6 w-6 text-gray-700' />
        <span className={cn('font-medium text-gray-700', isCollapsed && 'hidden')}>{label}</span>
      </div>
    </Link>
  )
}
