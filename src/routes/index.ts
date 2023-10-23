import  Router from 'express'
import afiliadoRouter from './afiliadoRouter';

const router = Router();

router.use("/afiliado", afiliadoRouter);

export default router;