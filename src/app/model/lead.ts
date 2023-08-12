export class Lead {
  id!: number;
  title!: string; 
  email!: string;
  stage!: string;  

  constructor(id: number, title: string, email: string, stage: string) {
    this.id = id;
    this.title = title;
    this.email = email;
    this.stage = stage;
  }
}
