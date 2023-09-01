export interface Environment {
  NODE_ENV: 'local' | 'production';
  PORT: number;
  DATABASE_URL: string;
}
