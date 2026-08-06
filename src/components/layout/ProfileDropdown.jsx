import dashboardIcon from '@/assets/modals/profile/dashboard-icon.png';
import adminIcon from '@/assets/modals/profile/admin-icon.png';
import settingIcon from '@/assets/modals/profile/setting-icon.png';
import loginIcon from '@/assets/modals/profile/login-icon.png';
import logoutIcon from '@/assets/modals/profile/logout-icon.png';
import { cn } from '@/utils/cn.js';


const MENU_ITEMS = [
  { id: 'lexmeet', label: 'Go to LexMeet', icon: dashboardIcon, href: '#' },
  { id: 'admin', label: 'Admin Account', icon: adminIcon, href: '#' },
  { id: 'settings', label: 'Settings', icon: settingIcon, href: '#' },
  { id: 'login', label: 'Log In', icon: loginIcon, href: '#' },
  { id: 'logout', label: 'Log Out', icon: logoutIcon, href: '#' },
];

export default function ProfileDropdown({ isOpen, onClose, onOpenLogin, className }) {
  return (
    <div
      className={cn(
        'w-[220px] sm:w-[240px] rounded-[22px] overflow-hidden',
        'bg-parchment/70 backdrop-blur-xl border border-white/80 shadow-glass',
        'p-1.5 transition-all duration-200 ease-out origin-top-right z-50',
        isOpen
          ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 scale-95 -translate-y-2 pointer-events-none',
        className
      )}
      role="menu"
      aria-orientation="vertical"
    >
      <div className="flex flex-col">
        {MENU_ITEMS.map((item, index) => {
          const isLast = index === MENU_ITEMS.length - 1;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                if (item.id === 'login' && onOpenLogin) {
                  onOpenLogin();
                }
                if (onClose) onClose();
              }}
              className={cn(
                'group flex items-center gap-3.5 px-4 py-3 sm:px-4.5 sm:py-3.5 w-full text-left rounded-xl transition-colors duration-150 cursor-pointer',
                'hover:bg-carbon-black/5 active:bg-carbon-black/10',
                !isLast && 'border-b border-carbon-black/10 rounded-b-none'
              )}
              role="menuitem"
            >
              <img
                src={item.icon}
                alt=""
                className="h-5 w-5 object-contain opacity-85 group-hover:opacity-100 transition-opacity"
              />
              <span className="font-sans text-[14px] sm:text-[14.5px] font-bold text-carbon-black tracking-tight group-hover:text-ink">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
