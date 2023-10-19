export class FeedsModel {
  projectName: string;
  connection: Connection;
  feedProps: FeedProps;
}

class Connection {
  dbName: string;
  dbUser: string;
  dbPassword: string;
  dbType: string;
  dbHost: string;
  dbPort: number;
}

class FeedProps {
  [prop: string]: string;
}
