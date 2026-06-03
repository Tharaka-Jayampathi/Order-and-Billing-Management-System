@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
.om-page {
  font-family: 'Inter', sans-serif;
  background: #f4f6fb;
  min-height: 100vh;
  padding: 36px 40px;
}

/* ─────────────────────────────────────────
   HEADER
───────────────────────────────────────── */
.om-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}

.om-title {
  font-family: 'Inter', sans-serif;
  font-size: 30px;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.5px;
}

.om-btn-new {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #0ea5e9;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 11px 22px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
  box-shadow: 0 4px 14px rgba(14, 165, 233, 0.35);
}

.om-btn-new:hover {
  background: #0284c7;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(14, 165, 233, 0.45);
}

.om-btn-new:active {
  transform: translateY(0);
}

/* ─────────────────────────────────────────
   TABLE CARD
───────────────────────────────────────── */
.om-card {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 16px rgba(15, 23, 42, 0.07);
  overflow: hidden;
}

.om-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #f1f5f9;
}

.om-search {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f8fafc;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  padding: 9px 14px;
  width: 260px;
}

.om-search input {
  border: none;
  background: transparent;
  outline: none;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #334155;
  width: 100%;
}

.om-search input::placeholder {
  color: #94a3b8;
}


/* ─────────────────────────────────────────
   TABLE
───────────────────────────────────────── */
table {
  width: 100%;
  border-collapse: collapse;
}

thead tr {
  background: #f8fafc;
}

thead th {
  padding: 13px 24px;
  text-align: left;
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #94a3b8;
}

tbody tr {
  border-top: 1px solid #f1f5f9;
  transition: background 0.15s;
}

tbody tr:hover {
  background: #fafcff;
}

tbody td {
  padding: 15px 24px;
  font-size: 14px;
  color: #334155;
}

.td-id {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #0f172a;
}

.td-amount {
  font-weight: 600;
  color: #0f172a;
}

/* ─────────────────────────────────────────
   STATUS BADGE
───────────────────────────────────────── */
.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

/* ─────────────────────────────────────────
   ACTION BUTTONS
───────────────────────────────────────── */
.btn-icon {
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  border-radius: 8px;
  color: #94a3b8;
  transition: background 0.15s, color 0.15s;
}

.btn-icon:hover {
  background: #f1f5f9;
  color: #475569;
}

.btn-icon.danger:hover {
  background: #fee2e2;
  color: #ef4444;
}

.actions-cell {
  display: flex;
  gap: 4px;
  align-items: center;
}

/* ─────────────────────────────────────────
   MODAL OVERLAY
───────────────────────────────────────── */
.om-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeOverlay 0.2s ease;
}

@keyframes fadeOverlay {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* ─────────────────────────────────────────
   MODAL BOX
───────────────────────────────────────── */
.om-modal {
  background: #fff;
  border-radius: 24px;
  width: 100%;
  max-width: 460px;
  box-shadow:
    0 24px 60px rgba(15, 23, 42, 0.22),
    0 0 0 1px rgba(15, 23, 42, 0.05);
  animation: slideUp 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  overflow: hidden;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(28px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0)    scale(1);    }
}

/* ─────────────────────────────────────────
   MODAL HEADER (gradient top)
───────────────────────────────────────── */
.om-modal-top {
  background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
  padding: 28px 28px 24px;
  position: relative;
}

.om-modal-icon {
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
}

.om-modal-title {
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.3px;
}

.om-modal-sub {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.75);
  margin-top: 3px;
}

.om-modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.18);
  border: none;
  border-radius: 8px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  transition: background 0.15s;
}

.om-modal-close:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* ─────────────────────────────────────────
   MODAL BODY
───────────────────────────────────────── */
.om-modal-body {
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* ─────────────────────────────────────────
   FORM FIELDS
───────────────────────────────────────── */
.om-field label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #64748b;
  margin-bottom: 8px;
}

.om-input-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.om-input-icon {
  position: absolute;
  left: 14px;
  color: #94a3b8;
  pointer-events: none;
}

.om-input-wrap input,
.om-input-wrap select {
  width: 100%;
  padding: 12px 14px 12px 42px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #0f172a;
  background: #f8fafc;
  outline: none;
  transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
  appearance: none;
  -webkit-appearance: none;
}

.om-input-wrap input:focus,
.om-input-wrap select:focus {
  border-color: #0ea5e9;
  background: #fff;
  box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.12);
}

.om-input-wrap input::placeholder {
  color: #cbd5e1;
}

/* ─────────────────────────────────────────
   MODAL DIVIDER
───────────────────────────────────────── */
.divider {
  height: 1px;
  background: #f1f5f9;
  margin: 0 28px 4px;
}

/* ─────────────────────────────────────────
   MODAL FOOTER
───────────────────────────────────────── */
.om-modal-footer {
  display: flex;
  gap: 12px;
  padding: 0 28px 28px;
}

.om-btn-cancel {
  flex: 1;
  padding: 13px;
  border: 2px solid #e2e8f0;
  background: #fff;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #64748b;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
}

.om-btn-cancel:hover {
  border-color: #cbd5e1;
  background: #f8fafc;
}

.om-btn-save {
  flex: 2;
  padding: 13px;
  background: linear-gradient(135deg, #0ea5e9, #0284c7);
  border: none;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
  box-shadow: 0 4px 14px rgba(14, 165, 233, 0.35);
}

.om-btn-save:hover {
  opacity: 0.92;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(14, 165, 233, 0.45);
}

.om-btn-save:active {
  transform: translateY(0);
}

/* ─────────────────────────────────────────
   HIDE NUMBER INPUT SPINNERS (prevent negatives via arrows)
───────────────────────────────────────── */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}

/* ─────────────────────────────────────────
   FILTER BUTTON (active / has-filters states)
───────────────────────────────────────── */
.om-filter-wrap {
  position: relative;
}

.om-btn-filter {
  display: flex;
  align-items: center;
  gap: 7px;
  background: #f8fafc;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  padding: 9px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #475569;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s, color 0.2s;
  position: relative;
}

.om-btn-filter:hover {
  border-color: #cbd5e1;
  background: #f1f5f9;
}

.om-btn-filter.active {
  border-color: #0ea5e9;
  background: #f0f9ff;
  color: #0284c7;
}

.om-btn-filter.has-filters {
  border-color: #0ea5e9;
  color: #0284c7;
}

.filter-badge {
  background: #0ea5e9;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  border-radius: 999px;
  padding: 1px 6px;
  line-height: 16px;
}

.filter-chevron {
  transition: transform 0.2s ease;
  margin-left: 2px;
}
.filter-chevron.open {
  transform: rotate(180deg);
}

/* ─────────────────────────────────────────
   FILTER PANEL DROPDOWN
───────────────────────────────────────── */
.filter-panel {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: 320px;
  background: #fff;
  border-radius: 18px;
  box-shadow:
    0 16px 48px rgba(15, 23, 42, 0.14),
    0 0 0 1px rgba(15, 23, 42, 0.06);
  z-index: 200;
  overflow: hidden;
  animation: filterDrop 0.2s cubic-bezier(0.34, 1.4, 0.64, 1);
}

@keyframes filterDrop {
  from { opacity: 0; transform: translateY(-8px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0)    scale(1);    }
}

.filter-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px 14px;
  border-bottom: 1px solid #f1f5f9;
}

.filter-panel-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
}

.filter-reset {
  display: flex;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: #94a3b8;
  cursor: pointer;
  transition: color 0.15s;
  padding: 4px 8px;
  border-radius: 6px;
}
.filter-reset:hover {
  color: #ef4444;
  background: #fee2e2;
}

.filter-section {
  padding: 16px 20px;
}

.filter-section-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #94a3b8;
  margin-bottom: 12px;
}

.filter-status-group {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.filter-status-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 13px;
  border-radius: 999px;
  border: 1.5px solid #e2e8f0;
  background: #f8fafc;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #475569;
  cursor: pointer;
  transition: all 0.15s ease;
}

.filter-status-chip:hover {
  border-color: #cbd5e1;
  background: #f1f5f9;
}

.filter-status-chip.selected {
  font-weight: 600;
}

.chip-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

.chip-check {
  margin-left: 2px;
}

.filter-divider {
  height: 1px;
  background: #f1f5f9;
  margin: 0 20px;
}

.filter-range-row,
.filter-date-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.filter-range-input,
.filter-date-input {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
}

.range-icon {
  position: absolute;
  left: 10px;
  color: #94a3b8;
  pointer-events: none;
}

.filter-range-input input,
.filter-date-input input {
  width: 100%;
  padding: 9px 10px 9px 28px;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  color: #0f172a;
  background: #f8fafc;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.filter-range-input input:focus,
.filter-date-input input:focus {
  border-color: #0ea5e9;
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
  background: #fff;
}

.filter-range-input input::placeholder {
  color: #cbd5e1;
}

.range-sep {
  color: #cbd5e1;
  font-size: 14px;
  flex-shrink: 0;
}

.filter-panel-footer {
  display: flex;
  gap: 10px;
  padding: 14px 20px 18px;
  border-top: 1px solid #f1f5f9;
}

.filter-btn-cancel {
  flex: 1;
  padding: 10px;
  border: 1.5px solid #e2e8f0;
  background: #fff;
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #64748b;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
}
.filter-btn-cancel:hover {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.filter-btn-apply {
  flex: 2;
  padding: 10px;
  background: linear-gradient(135deg, #0ea5e9, #0284c7);
  border: none;
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.15s;
  box-shadow: 0 3px 10px rgba(14, 165, 233, 0.3);
}
.filter-btn-apply:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}
.filter-btn-apply:active {
  transform: translateY(0);
}

/* ─────────────────────────────────────────
   ACTIVE FILTER CHIPS BAR
───────────────────────────────────────── */
.active-filters-bar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px 24px;
  background: #f8fafc;
  border-bottom: 1px solid #f1f5f9;
}

.active-filters-label {
  font-size: 12px;
  font-weight: 600;
  color: #94a3b8;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.active-chip {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 10px 3px 12px;
  background: #e0f2fe;
  color: #0369a1;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
}

.active-chip button {
  background: none;
  border: none;
  cursor: pointer;
  color: #0369a1;
  display: flex;
  align-items: center;
  padding: 1px;
  border-radius: 50%;
  transition: background 0.15s;
}
.active-chip button:hover {
  background: rgba(3, 105, 161, 0.15);
}

.active-clear-all {
  background: none;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #ef4444;
  cursor: pointer;
  margin-left: 4px;
  padding: 3px 8px;
  border-radius: 6px;
  transition: background 0.15s;
}
.active-clear-all:hover {
  background: #fee2e2;
}

/* ─────────────────────────────────────────
   EMPTY STATE
───────────────────────────────────────── */
.empty-row {
  text-align: center;
  padding: 40px 24px !important;
  color: #94a3b8;
  font-size: 14px;
}

/* ─────────────────────────────────────────
   EDIT BUTTON HOVER (blue tint)
───────────────────────────────────────── */
.btn-icon.edit:hover {
  background: #e0f2fe;
  color: #0284c7;
}

/* ─────────────────────────────────────────
   EDIT MODAL — teal/indigo gradient header
───────────────────────────────────────── */
.om-modal-top--edit {
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%) !important;
}

.om-btn-save--edit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  background: linear-gradient(135deg, #6366f1, #4f46e5) !important;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.38) !important;
}

.om-btn-save--edit:hover {
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.48) !important;
}

/* ─────────────────────────────────────────
   DELETE CONFIRM MODAL
───────────────────────────────────────── */
.om-modal--delete {
  max-width: 420px !important;
  position: relative;
}

.om-modal-close--outside {
  position: absolute;
  top: 16px;
  right: 16px;
  background: #f1f5f9 !important;
  color: #64748b !important;
  border-radius: 8px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  z-index: 10;
}
.om-modal-close--outside:hover {
  background: #e2e8f0 !important;
  color: #334155 !important;
}

.delete-modal-body {
  padding: 40px 28px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.delete-icon-wrap {
  width: 64px;
  height: 64px;
  background: #fee2e2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
  animation: deletePulse 0.4s ease;
}

@keyframes deletePulse {
  0%   { transform: scale(0.6); opacity: 0; }
  70%  { transform: scale(1.1); }
  100% { transform: scale(1);   opacity: 1; }
}

.delete-title {
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.3px;
}

.delete-desc {
  font-size: 14px;
  color: #64748b;
  line-height: 1.6;
  max-width: 300px;
}

.delete-order-preview {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f8fafc;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  padding: 12px 18px;
  margin-top: 4px;
  width: 100%;
  justify-content: center;
}

.delete-preview-id {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: #0f172a;
}

.delete-preview-amount {
  font-size: 14px;
  font-weight: 600;
  color: #334155;
}

.delete-modal-footer {
  display: flex;
  gap: 12px;
  padding: 8px 28px 28px;
}

.om-btn-delete {
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 13px;
  background: linear-gradient(135deg, #ef4444, #dc2626);
  border: none;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
  box-shadow: 0 4px 14px rgba(239, 68, 68, 0.35);
}
.om-btn-delete:hover {
  opacity: 0.92;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(239, 68, 68, 0.45);
}
.om-btn-delete:active {
  transform: translateY(0);
}
