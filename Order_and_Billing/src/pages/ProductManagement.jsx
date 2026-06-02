import { Plus, Search, Filter, Edit2, Trash2 } from 'lucide-react';
import { mockProducts } from '../data/mockData';
import './ProductManagement.css';

export default function ProductManagement() {
  return (
    <div className="main-content">
      <div className="header">
        <h1>Inventory</h1>
        <button className="btn btn-primary">
          <Plus size={16} /> Add Product
        </button>
      </div>

      <div className="table-container">
        <div className="table-header">
          <div className="search-bar">
            <Search size={16} className="search-icon" />
            <input type="text" placeholder="Search components, peripherals..." />
          </div>
          <div className="flex gap-2">
            <button className="btn btn-secondary"><Filter size={16} /> Filter</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockProducts.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className="product-info">
                    <img src={product.image} alt={product.name} className="product-img" />
                    <div>
                      <div className="product-name">{product.name}</div>
                      <div className="product-id">{product.id}</div>
                    </div>
                  </div>
                </td>
                <td className="col-category">{product.category}</td>
                <td className="col-price">{product.price}</td>
                <td>
                  {product.stock === 'Out of Stock' ? (
                    <span className="text-danger font-medium">{product.stock}</span>
                  ) : product.stock === '3' ? (
                    <span className="text-warning font-medium">{product.stock} (Low)</span>
                  ) : (
                    <span>{product.stock}</span>
                  )}
                </td>
                <td>
                  <span className={`badge ${product.status === 'Active' ? 'badge-success' : product.status === 'Low Stock' ? 'badge-warning' : 'badge-danger'}`}>
                    {product.status}
                  </span>
                </td>
                <td>
                  <div className="flex gap-2">
                    <button className="btn-icon"><Edit2 size={16} /></button>
                    <button className="btn-icon text-danger"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
