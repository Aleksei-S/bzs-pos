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
    let resultCMP = this['CMP'];
    let resultTotal = this['Total'];
    this.arrMonth.forEach((e, idx) => {
      if (idx === this.arrMonth.length - 1) {
        this[e]['CMP'] = resultCMP;
        this[e]['Total'] = resultTotal;
      }
      resultCMP = parseFloat((resultCMP - this[e]['CMP']).toFixed(2));
      resultTotal =  parseFloat((resultTotal - this[e]['Total']).toFixed(2));
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
  public CMP: number;
  public Total: number;
  constructor() {
    this.CMP = 0;
    this.Total = 0;
  }
}

export class PercentRow {
  arrMonth: string[] = [];
  constructor(args: string[]) {
    this.arrMonth = args;
    args.forEach((e) => {
      this[e] = +0;
    });
  }
  calcPercent() {
    let result = 0;
    this.arrMonth.forEach((e) => {
      result = result + (+this[e]);
    });
    return result;
  }
}


