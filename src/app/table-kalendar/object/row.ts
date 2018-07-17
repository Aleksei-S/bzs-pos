export class ROW {
  name: string;
  CMP: number;
  Total: number;
  arrMonth: string[] = [];
  constructor(name = 'name') {
    this.name = name;
    this.Total = 0;
    this.CMP = 0;
  }

  setarrMonth(numb: number) {
    this.Total = numb;
  }

  createMonth(args: string[]) {
    this.deleteMonth(this.arrMonth);
    const arr = [];
    args.forEach((e) => {
      this[e] = new CELL();
      arr.push(e);
    });
    this.arrMonth = arr;
  }

  deleteMonth(arrMonth) {
    this.arrMonth.forEach((e) => {
      delete this[e];
    });
  }

  calculateTotal() {
    let result: number;
    this.arrMonth.forEach((e, idx, array) => {
      result = this[e];
      if (idx === this.arrMonth.length - 1) {
        console.log('Last callback call at index' + idx + 'with value ' + e);
      }
    });
  }


}

export class CELL {
  public CMP?: number;
  public Total: number;

  constructor(obj = { CMP: 0, Total: 0 }) {

    this.CMP = obj.CMP;
    this.Total = obj.Total;
  }
}
