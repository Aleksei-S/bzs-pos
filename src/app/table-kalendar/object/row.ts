export class ROW {
  name: string;
  CMP: number;
  Total: number;
  calculate = false;
  arrMonth: string[] = [];
  constructor(name = 'name') {
    this.name = name;
    this.Total = 0;
    this.CMP = 0;
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

export class MainRow extends ROW {
  name = 'Жилой дом';
  calculate = true;
}

export class TotalRow extends ROW {
  name = 'Всего';
  calculate = true;
}

export class OtherRow extends ROW {
  name = 'Прочие работы и лимитированные затраты ';
  calculate = true;
}


export class CELL {
  public CMP?: number;
  public Total: number;

  constructor(obj = { CMP: 0, Total: 0 }) {

    this.CMP = obj.CMP;
    this.Total = obj.Total;
  }
}

export class PercentRow extends ROW {
  name = 'Распределение капвложений по месяцам';
  createMonth(args: string[]) {
    this.deleteMonth(this.arrMonth);
    const arr = [];
    args.forEach((e) => {
      this[e] = 0;
      arr.push(e);
    });
    this.arrMonth = arr;
  }
}






export class TableKalendar  {
  rows: ROW[];
  constructor() {}

  calcOtherTable() {
    let result = 0;
    this.rows.forEach((row) => {
      // row.Total = ;
    });
  }

  calcCMPTable() {
    let result = 0;
    // this.row.forEach((e) => {
    //   e
    // });
  }

  calcRowTable(e) {
    let result = 0;
    // this.row.forEach((e) => {
    //   e
    // });
  }
}
