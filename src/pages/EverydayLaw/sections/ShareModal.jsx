import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

// Import all icons directly from ELassets
import fbIcon from '@/assets/ELassets/fb.png';
import xIcon from '@/assets/ELassets/x.png';
import linkedinIcon from '@/assets/ELassets/Lin.png';
import waIcon from '@/assets/ELassets/wa.png';
import tgIcon from '@/assets/ELassets/tg.png';
import messengerIcon from '@/assets/ELassets/Messenger.png';
import redditIcon from '@/assets/ELassets/redd.png';
import pinterestIcon from '@/assets/ELassets/pint.png';
import emailIcon from '@/assets/ELassets/email.png';
import smsIcon from '@/assets/ELassets/sms.png';

const PLATFORMS = [
  { id: 'facebook', name: 'Facebook', icon: fbIcon },
  { id: 'x', name: 'X (Twitter)', icon: xIcon },
  { id: 'linkedin', name: 'LinkedIn', icon: linkedinIcon },
  { id: 'whatsapp', name: 'WhatsApp', icon: waIcon },
  { id: 'telegram', name: 'Telegram', icon: tgIcon },
  { id: 'messenger', name: 'Messenger', icon: messengerIcon },
  { id: 'reddit', name: 'Reddit', icon: redditIcon },
  { id: 'pinterest', name: 'Pinterest', icon: pinterestIcon },
  { id: 'email', name: 'E-mail', icon: emailIcon },
  { id: 'sms', name: 'SMS', icon: smsIcon }
];

export default function ShareModal({ isOpen, onClose, url }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Share this page" 
      size="lg" 
      showCloseButton={false} 
      className="!bg-white/80 !shadow-2xl relative"
    >
      {/* Custom bare 'X' close button to remove the circle */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 font-sans text-xl font-bold text-ink/60 hover:text-ink transition-colors focus:outline-none leading-none"
        aria-label="Close dialog"
      >
        X
      </button>

      <div className="mt-2">
        <h4 className="font-sans text-sm font-bold text-ink mb-4">Share via</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 justify-items-stretch">
          {PLATFORMS.map((platform) => (
            <button key={platform.id} className="flex items-center gap-2 group focus:outline-none bg-gradient-to-r from-olive to-forest rounded-full p-1.5 pr-3 shadow-md hover:scale-105 transition-transform w-full">
               <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                  <img src={platform.icon} alt={platform.name} className="w-full h-full object-contain p-1" />
               </div>
               <span className="font-sans text-[11px] font-semibold text-cream text-left leading-tight truncate">
                  {platform.name}
               </span>
            </button>
          ))}
        </div>

        <div className="mt-8 border-t border-sage/30 pt-6">
          <h4 className="font-sans text-sm font-bold text-ink mb-3">Share this link</h4>
          <div className="flex items-center justify-between bg-white/70 border border-sage/60 rounded-full h-11 pl-4 pr-1 overflow-hidden shadow-inner">
            <input 
              type="text" 
              readOnly 
              value={url} 
              className="bg-transparent border-none outline-none text-[13px] text-ink/70 w-full truncate font-sans"
            />
            <Button variant="glass" size="md" className="!h-9 !px-4 !text-xs" onClick={handleCopy}>
              Copy
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}