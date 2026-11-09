import { Link } from 'react-router-dom';

// The primary cell of a clickable table row. The whole <tr> stays clickable with
// the mouse; this gives keyboard and screen-reader users a real link, and lets
// tests locate the row target with getByRole('link', { name }).
// stopPropagation keeps the row's own onClick from navigating a second time.
export default function RowLink({ to, label, children }) {
  return (
    <Link to={to} aria-label={label} className="row-link" onClick={e => e.stopPropagation()}>
      {children}
    </Link>
  );
}
