export default function Read({ params }: { params: { id: string } }) {
  return (
    <>
      <h2>Read</h2>
      parameter : {params.id}
    </>
  );
}
