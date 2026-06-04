import { useState, useEffect } from 'react';
import { Search, Plus, Edit, Trash2, Package } from 'lucide-react';
import { fetchProducts, createProduct, updateProduct, deleteProduct } from '../services/api';
import './Product.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [newProduct, setNewProduct] = useState({
    name: '', category: '', price: '', stock: '', description: ''
  });

  const loadProducts = () => {
    setLoading(true);
    fetchProducts()
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter(p => 
    p.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSaveProduct = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      const payload = {
        name: newProduct.name,
        category: newProduct.category,
        description: newProduct.description,
        price: Number(newProduct.price) || 0,
        stock: Number(newProduct.stock) || 0
      };

      if (editingProductId) {
        await updateProduct(editingProductId, payload);
      } else {
        await createProduct(payload);
      }

      setIsModalOpen(false);
      setEditingProductId(null);
      setNewProduct({ name: '', category: '', price: '', stock: '', description: '' });
      loadProducts();
    } catch (error) {
      console.error("Failed to save product", error);
      setErrorMessage(error.message || 'Unable to save product. Please ensure all fields are filled.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(id);
        loadProducts();
      } catch (error) {
        console.error("Failed to delete", error);
      }
    }
  };

  return (
    <div>
      <div className="page-header">
        <h1>Products & Inventory</h1>
        <div className="header-actions">
          <div className="search-bar">
            <Search size={18} className="text-secondary" />
            <input 
              type="text" 
              placeholder="Search components, peripherals..." 
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
            <Plus size={18} />
            <span>Add Product</span>
          </button>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="5" style={{ textAlign: 'center' }}>Loading...</td></tr>
            ) : filteredProducts.length === 0 ? (
              <tr>
                <td colSpan="5">
                  <div className="empty-state">
                    <Package size={48} />
                    <h3>No products found</h3>
                    <p>Add some products to your inventory.</p>
                  </div>
                </td>
              </tr>
            ) : (
              filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>
                    <div className="product-info">
                      <div className="product-img" style={{ width: '40px', height: '40px', background: '#334155', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Package size={20} color="#94a3b8" />
                      </div>
                      <div>
                        <div className="product-name" style={{ fontWeight: '600' }}>{product.name}</div>
                        {product.description && (
                          <div className="product-description" style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '2px', maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {product.description}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td>{product.category}</td>
                  <td>${product.price?.toFixed(2)}</td>
                  <td>{product.stock}</td>
                  <td>
                    <div className="flex gap-1">
                      <button className="btn-icon" title="Edit" onClick={() => { 
                        setEditingProductId(product.id); 
                        setNewProduct({ 
                          name: product.name || '', 
                          category: product.category || '', 
                          description: product.description || '',
                          price: product.price?.toString() || '', 
                          stock: (product.stock || 0).toString()
                        }); 
                        setIsModalOpen(true); 
                      }}>
                        <Edit size={18} />
                      </button>
                      <button className="btn-icon" title="Delete" onClick={() => handleDelete(product.id)}>
                        <Trash2 size={18} className="text-danger" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>{editingProductId ? 'Edit Product' : 'Add New Product'}</h2>
              <button className="btn-icon" onClick={() => { setIsModalOpen(false); setEditingProductId(null); }}>×</button>
            </div>
            <form onSubmit={handleSaveProduct}>
              <div className="modal-body">
                <div className="form-group">
                  <label>Product Name</label>
                  <input required value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea value={newProduct.description} onChange={e => setNewProduct({...newProduct, description: e.target.value})} placeholder="Optional product description" />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select required value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})}>
                    <option value="">Select category...</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Peripherals">Peripherals</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Components">Components</option>
                    <option value="Displays">Displays</option>
                  </select>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Price ($)</label>
                    <input type="number" step="0.01" required value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label>Stock Quantity</label>
                    <input type="number" required value={newProduct.stock} onChange={e => setNewProduct({...newProduct, stock: e.target.value})} />
                  </div>
                </div>
                {errorMessage && (
                  <div className="alert alert-danger" style={{ marginTop: '1rem', color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)', padding: '0.75rem', borderRadius: '4px' }}>{errorMessage}</div>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => { setIsModalOpen(false); setEditingProductId(null); }}>Cancel</button>
                <button type="submit" className="btn btn-primary">{editingProductId ? 'Update Product' : 'Save Product'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
