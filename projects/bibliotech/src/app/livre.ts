export class Livre {
    constructor(
      public id: number,
      public title: string,
      public resume: string,
      public image: string,
      public createdAt: Date,
      public updatedAt: Date | null
    ) {
      this.createdAt = new Date();
    }
  }