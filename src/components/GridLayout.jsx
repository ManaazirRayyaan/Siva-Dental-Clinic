export default function GridLayout({ children, columns = "md:grid-cols-2", className = "" }) {
  return <div className={`grid grid-cols-1 gap-8 ${columns} ${className}`}>{children}</div>;
}
