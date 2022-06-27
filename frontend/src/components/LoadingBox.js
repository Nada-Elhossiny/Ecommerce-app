export default function LoadingBox() {
  return (
    <Spinner animation="border" role="status">
      <Span className="visually-hidden">Loading...</Span>
    </Spinner>
  );
}
