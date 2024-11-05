import { Router } from 'express';
import { handleGetSettings, handleSaveSettings } from '../services/settingsService';

const router = Router();

// Get Methods
router.get('/settings', handleGetSettings);

// Save Methods
router.post('/save-settings', handleSaveSettings);

export default router;
