import Promise from 'bluebird';
import L from '../../common/logger';

let iD = 0;
interface IExample {
  id: number;
  name: string;
}

const examples: IExample[] = [
    { id: iD++, name: 'example 0' },
    { id: iD++, name: 'example 1' }
];

export class ExamplesService {
  all(): Promise<IExample[]> {
    L.info(examples, 'fetch all examples');
    return Promise.resolve(examples);
  }

  byId(id: number): Promise<IExample> {
    L.info(`fetch example with id ${id}`);
    return this.all().then(r => r[id]);
  }

  create(name: string): Promise<IExample> {
    L.info(`create example with name ${name}`);
    const example: IExample = {
      id: iD++,
      name
    };
    examples.push(example);
    return Promise.resolve(example);
  }
}

export default new ExamplesService();
