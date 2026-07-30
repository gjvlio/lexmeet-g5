import { getFeedback } from '../cv';

/** Five stars, filled up to the score. */
function Stars({ rating }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${rating.toFixed(1)} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={i <= Math.round(rating) ? 'h-3.5 w-3.5 text-carbon-black' : 'h-3.5 w-3.5 text-sage-mist'}
          aria-hidden
        >
          <path
            d="m12 3 2.7 5.9 6.3.7-4.7 4.3 1.3 6.1L12 17l-5.6 3 1.3-6.1L3 9.6l6.3-.7L12 3Z"
            fill="currentColor"
          />
        </svg>
      ))}
    </span>
  );
}

/** Reviewer photo, falling back to initials if the asset is missing. */
function Avatar({ name, src }) {
  if (src) {
    return (
      <img
        src={src}
        alt=""
        className="h-11 w-11 shrink-0 rounded-full object-cover"
      />
    );
  }

  const initials = name
    .replace(/^(Mr|Mrs|Ms|Atty)\.?\s+/i, '')
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

  return (
    <span
      aria-hidden
      className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-palm-leaf font-sans text-sm font-bold text-parchment"
    >
      {initials}
    </span>
  );
}

/** Ratings & Feedback tab — scrollable list of client reviews. */
export default function LawyerRatings({ lawyer }) {
  const feedback = getFeedback(lawyer);

  return (
    <div>
      <p className="font-sans text-[13px] font-semibold text-dusty-olive">Client Feedback</p>
      <hr className="mt-2 border-sage-mist/70" />

      <ul className="mt-4 space-y-3">
        {feedback.map((review, i) => (
          <li
            key={`${review.name}-${i}`}
            className="rounded-2xl border border-white/80 bg-white/55 p-3 sm:p-4"
          >
            <div className="flex gap-3">
              <Avatar name={review.name} src={review.avatar} />

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-sans text-sm font-bold text-carbon-black">
                      {review.name}
                    </span>
                    <Stars rating={review.rating} />
                    <span className="font-sans text-[12px] text-dark-khaki">
                      ({review.rating.toFixed(1)})
                    </span>
                  </div>
                  <span className="font-sans text-[11px] text-dusty-olive">{review.date}</span>
                </div>

                <p className="mt-1.5 break-words font-sans text-[13px] leading-relaxed text-dark-khaki">
                  {review.body}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
