import * as bunyan from 'bunyan';

export function getLogger(name: string): bunyan {
  return bunyan.createLogger({ name, level: 'info' });
}
