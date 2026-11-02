import { Router, type IRouter } from "express";
import healthRouter from "./health";
import topicsRouter from "./topics";
import questionsRouter from "./questions";
import sessionsRouter from "./sessions";
import progressRouter from "./progress";

const router: IRouter = Router();

router.use(healthRouter);
router.use(topicsRouter);
router.use(questionsRouter);
router.use(sessionsRouter);
router.use(progressRouter);

export default router;
