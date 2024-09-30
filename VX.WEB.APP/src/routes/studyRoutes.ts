import { Router } from 'express';
import { handleNewStudy } from '../services/studyService';

import { validateAddStudy } from '../middlewares/validators/studyValidator';

const router = Router();

router.post('/add', validateAddStudy, handleNewStudy);

export default router;
