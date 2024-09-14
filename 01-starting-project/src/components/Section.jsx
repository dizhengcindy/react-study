export default function section({ title, children, ...props }) {//forwarded props
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
