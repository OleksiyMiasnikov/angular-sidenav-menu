export class Lead {
  id!: number;
  title!: string; 
  email!: string;
  stage!: string;  
  constructor(title: string, email: string, stage: string) {
    this.title = title;
    this.email = email;
    this.stage = stage;
  }
}
