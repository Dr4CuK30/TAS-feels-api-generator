export class FeedsModel {
  projectName: string;
  connection: Connection;
}

class Connection {
  dbName: string;
  dbUser: string;
  dbPassword: string;
  dbType: string;
}
