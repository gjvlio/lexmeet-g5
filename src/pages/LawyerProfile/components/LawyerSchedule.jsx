import { cn } from '@/utils/cn';

const DEFAULT_SCHEDULE = [
  { day: 'Monday', am: '8:00 AM - 11:00 AM', pm: '3:00 PM - 11:00 PM', available: true },
  { day: 'Tuesday', am: '8:00 AM - 11:00 AM', pm: '3:00 PM - 11:00 PM', available: true },
  { day: 'Wednesday', am: '8:00 AM - 11:00 AM', pm: '3:00 PM - 11:00 PM', available: true },
  { day: 'Thursday', am: '8:00 AM - 11:00 AM', pm: '3:00 PM - 11:00 PM', available: true },
  { day: 'Friday', am: '8:00 AM - 11:00 AM', pm: '3:00 PM - 11:00 PM', available: true },
  { day: 'Saturday', am: 'Not Available', pm: 'Not Available', available: false },
  { day: 'Sunday', am: 'Not Available', pm: 'Not Available', available: false },
];

/**
 * "8:00 AM - 11:00 AM" reads as "8:00 - 11:00 AM" — the column header already
 * says which half of the day it is, so the leading meridiem is noise. Ranges
 * that cross over (AM to PM) keep both.
 */
function condenseRange(range) {
  const match = /^(\d{1,2}:\d{2})\s*(AM|PM)\s*-\s*(\d{1,2}:\d{2})\s*(AM|PM)$/i.exec(range);
  if (!match) return range;

  const [, start, startMeridiem, end, endMeridiem] = match;
  if (startMeridiem.toUpperCase() !== endMeridiem.toUpperCase()) return range;

  return `${start} - ${end} ${endMeridiem.toUpperCase()}`;
}

/**
 * Lawyer Schedule Tab Component
 * Displays a 100% pixel-accurate weekly availability table matching Figma specifications.
 */
export default function LawyerSchedule({ lawyer }) {
  const schedule = lawyer?.schedule ?? DEFAULT_SCHEDULE;

  return (
    <div className="w-full">
      {/* Table Card Container */}
      <div className="overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#D5D7C5]/80 bg-white/40 shadow-sm">
        {/* Dark Green to Green Gradient Header Bar */}
        <div className="grid grid-cols-3 bg-gradient-to-r from-[#2D311A] via-[#383D21] to-[#464B2A] px-4 py-3.5 text-parchment font-sans text-center text-xs sm:text-[15px] font-bold tracking-wide">
          <div className="text-center sm:text-center pl-2 sm:pl-0">Days</div>
          <div>AM Schedule</div>
          <div>PM Schedule</div>
        </div>

        {/* Schedule Table Rows */}
        <div className="divide-y divide-[#D5D7C5]/70">
          {schedule.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const isAmAvailable = item.available && item.am !== 'Not Available';
            const isPmAvailable = item.available && item.pm !== 'Not Available';

            return (
              <div
                key={item.day}
                className={cn(
                  'grid grid-cols-3 items-center py-3.5 sm:py-4 transition-colors',
                  isEven ? 'bg-[#F4F5ED]/90' : 'bg-[#EBECE1]/90'
                )}
              >
                {/* Days column — sans bold, matching the entry titles on the
                    CV and Ratings tabs so the three panels read as one. */}
                <div className="font-sans font-bold text-carbon-black text-[13px] sm:text-sm text-center border-r border-[#D5D7C5]/70 px-2">
                  {item.day}
                </div>

                {/* AM Schedule Column */}
                <div className="text-center font-sans text-xs sm:text-[14px] border-r border-[#D5D7C5]/70 px-2">
                  <span
                    className={cn(
                      'block',
                      isAmAvailable
                        ? 'font-normal text-[#3D4223]'
                        : 'font-normal text-[#8E927A]'
                    )}
                  >
                    {condenseRange(item.am)}
                  </span>
                </div>

                {/* PM Schedule Column */}
                <div className="text-center font-sans text-xs sm:text-[14px] px-2">
                  <span
                    className={cn(
                      'block',
                      isPmAvailable
                        ? 'font-normal text-[#3D4223]'
                        : 'font-normal text-[#8E927A]'
                    )}
                  >
                    {condenseRange(item.pm)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
