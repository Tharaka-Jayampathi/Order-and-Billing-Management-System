// API Service

const BASE_URL = '/api';

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorMsg = await response.text();
    throw new Error(errorMsg || 'API request failed');
  }
  // Some endpoints like delete return 204 No Content
  if (response.status === 204) return null;
  return response.json();
};

export const fetchDashboardStats = () => 
  fetch(`${BASE_URL}/dashboard/stats`).then(handleResponse);

// Products
export const fetchProducts = () => 
  fetch(`${BASE_URL}/products`).then(handleResponse);

export const searchProducts = (query) => 
  fetch(`${BASE_URL}/products/search?query=${encodeURIComponent(query)}`).then(handleResponse);

export const createProduct = (data) => 
  fetch(`${BASE_URL}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(handleResponse);

export const updateProduct = (id, data) => 
  fetch(`${BASE_URL}/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(handleResponse);

export const deleteProduct = (id) => 
  fetch(`${BASE_URL}/products/${id}`, { method: 'DELETE' }).then(handleResponse);

// Orders
export const fetchOrders = () => 
  fetch(`${BASE_URL}/orders`).then(handleResponse);

export const createOrder = (data) => 
  fetch(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(handleResponse);

export const updateOrderStatus = (id, status) => 
  fetch(`${BASE_URL}/orders/${id}/status`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  }).then(handleResponse);

export const deleteOrder = (id) => 
  fetch(`${BASE_URL}/orders/${id}`, { method: 'DELETE' }).then(handleResponse);

// Invoices
export const fetchInvoices = () => 
  fetch(`${BASE_URL}/invoices`).then(handleResponse);

export const createInvoice = (data) => 
  fetch(`${BASE_URL}/invoices`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(handleResponse);

export const createInvoiceFromOrder = (orderId) => 
  fetch(`${BASE_URL}/invoices/from-order/${orderId}`, { method: 'POST' }).then(handleResponse);

export const updateInvoiceStatus = (id, status) => 
  fetch(`${BASE_URL}/invoices/${id}/status`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  }).then(handleResponse);

export const deleteInvoice = (id) => 
  fetch(`${BASE_URL}/invoices/${id}`, { method: 'DELETE' }).then(handleResponse);
