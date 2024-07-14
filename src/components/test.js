export default function Nerona({ content, author, title, spouse, strong }) {
  if (strong) {
    return (
      <div>
        <p>{content}</p>
        <h1>By: {author}</h1>
        <h2>{title}</h2>
        <h3>{spouse}</h3>
      </div>
    );
  }

  return (
    <div>
      <p>{content}</p>
      <h1>
        By: <strong>{author}</strong>
      </h1>
      <h2>{title}</h2>
      <h3>
        <strong>{spouse}</strong>
      </h3>
    </div>
  );
}
