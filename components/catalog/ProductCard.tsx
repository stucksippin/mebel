import { Product } from "@/types/catalog";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card">
      <div className="product-img">
        <div className="product-img-placeholder">
          <span>{product.name}</span>
          <small>Фото</small>
        </div>
        {product.badge && (
          <span className="product-badge">{product.badge}</span>
        )}
      </div>
      <div className="product-body">
        <h3 className="product-name">{product.name}</h3>
        <ul className="product-params">
          {product.material && (
            <li><span>Материал:</span> {product.material}</li>
          )}
          {product.term && (
            <li><span>Срок:</span> {product.term}</li>
          )}
          {product.size && (
            <li><span>Размер:</span> {product.size}</li>
          )}
        </ul>
        <div className="product-footer">
          <div className="product-price">
            {product.priceFrom ? (
              <>
                <span className="product-price-label">от</span>
                <span className="product-price-value">{product.priceFrom.toLocaleString("ru-RU")} ₽</span>
              </>
            ) : (
              <span className="product-price-value">Цена по запросу</span>
            )}
          </div>
          <a href="/#zayavka" className="product-btn">Заказать</a>
        </div>
      </div>
    </div>
  );
}
