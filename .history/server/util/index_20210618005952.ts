import express, {Request, Response, NextFunction } from 'express';

import * as DBConfig from '../config/db';

export function UserDisplayName(req: Request)