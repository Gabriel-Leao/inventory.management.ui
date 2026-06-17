import useSidebar from '@/hooks/useSidebar'
import { Logo } from './logo'
import { cn } from '@/lib/utils/cn'
import { SidebarLink } from './sidebarLink'

import { sidebarLinks } from './_data/sidebarLinks'

export const Sidebar = () => {
  const { isSidebarCollapsed, sidebarClassNames } = useSidebar()

  return (
    <div className={sidebarClassNames}>
      <Logo />

      <div className='mt-8 grow'>
        {sidebarLinks.map((link) => (
          <SidebarLink
            key={link.label}
            href={link.href}
            icon={link.icon}
            label={link.label}
            isCollapsed={isSidebarCollapsed}
          />
        ))}
      </div>

      <p className={cn('mb-10 text-center text-xs text-gray-500', isSidebarCollapsed && 'hidden')}>
        &copy; 2026 Gabriel Leão
      </p>
    </div>
  )
}
