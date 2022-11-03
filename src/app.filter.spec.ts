import { SystemExceptionFilter, HttpExceptionFilter} from './app.filter';

describe('SystemEceptionFilter', () => {
  it('should be defined', () => {
    expect(new SystemExceptionFilter()).toBeDefined();
  });
});

describe('HttpEceptionFilter', () => {
  it('should be defined', () => {
    expect(new HttpExceptionFilter()).toBeDefined();
  });
});