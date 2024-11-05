import { Router } from 'express';
import { handleNewPatient } from '../services/patientService';

import { validateAddPatient } from '../middlewares/validators/patientValidator';

const router = Router();

router.post('/add', validateAddPatient, handleNewPatient);

export default router;
