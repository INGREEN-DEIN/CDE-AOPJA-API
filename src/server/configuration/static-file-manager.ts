import express, { Application } from 'express';
import path from 'path';

export class StaticFileManager {
  public static setup(app: Application, publicPath: string): void {
    app.use(express.static(publicPath));

    app.use('/upload', express.static(path.join(__dirname, '../../upload')));
  }
}
