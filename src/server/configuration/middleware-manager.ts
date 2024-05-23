import express, { Application } from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';

export class MiddlewareManager {
  public static setup(app: Application): void {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(
      fileUpload({
        limits: { fileSize: 50 * 1024 * 1024 * 1024 },
      }),
    );

    app.use(
      cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
      }),
    );
  }
}
