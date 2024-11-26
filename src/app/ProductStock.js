export default function ProductStock({ inStock }) {
  return (
    <div>
      {inStock ? (
        <p>Producto disponible</p>
      ) : (
        <p>Producto agotado</p>
      )}
    </div>
  );
}
