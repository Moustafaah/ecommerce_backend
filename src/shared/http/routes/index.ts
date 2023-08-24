import { Router } from 'express';

export const routes = Router();

routes.get('/',(req, res)=> {
  console.log()
  return res.json({message: 'Hallo Dev'})
})