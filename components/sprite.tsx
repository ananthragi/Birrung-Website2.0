export function Sprite() {
  return (
    <svg className="sprite" aria-hidden="true">
      <symbol id="star" viewBox="0 0 20 20">
        <path fill="currentColor" d="M10 1.4 12.2 7.2h6.1l-4.9 3.7 1.9 6.1L10 13.6 4.7 17l1.9-6.1L1.7 7.2h6.1z" />
      </symbol>
      <symbol id="check" viewBox="0 0 20 20">
        <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M4 10.5 8 14.5 16 6" />
      </symbol>
    </svg>
  );
}

export function Stars({ score }: { score: 5 | 4.5 }) {
  const label = score === 5 ? "Rated 5.0 out of 5" : "Rated 4.5 out of 5";
  return (
    <span className="stars" aria-label={label}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} className={score < 5 && index === 4 ? "dim" : undefined} aria-hidden="true">
          <use href="#star" />
        </svg>
      ))}{" "}
      {score === 5 ? "5.0" : "4.5"}
    </span>
  );
}

export function Check() {
  return (
    <svg aria-hidden="true">
      <use href="#check" />
    </svg>
  );
}
