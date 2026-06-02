import { Router } from 'express';
import { getSettings, updateSettings } from '../db/store.js';

const router = Router();

// GET /api/settings
router.get('/', (req, res) => {
  res.json({ success: true, data: getSettings() });
});

// PUT /api/settings
router.put('/', (req, res) => {
  const allowed = ['storeName', 'contactEmail', 'currency', 'taxRate', 'adminName', 'adminEmail', 'notifications'];
  const patch = {};
  for (const key of allowed) {
    if (req.body[key] != null) patch[key] = req.body[key];
  }
  const settings = updateSettings(patch);
  res.json({ success: true, data: settings });
});

export default router;
