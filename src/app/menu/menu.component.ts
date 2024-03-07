import { Component } from '@angular/core';
import data from '../menuData/menu.json'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent{
  constructor() {
    this.generatePlot();
  }

  groupBy(xs:any, key:any) {
    return xs.reduce(function (rv:any, x:any ) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  menuList:any = [];
  groupedMertics:any = {};
  generatePlot() {
    const getMetrics = [];
    const getHits = data.hits;
    for (let i = 0; i < getHits.length; i++) {
      const company = getHits[i]._id;
      const hitLoop = getHits[i]._source;
      for (let metric in hitLoop) {
        let value;
        value = hitLoop[metric];
        let obj:any = {};
        obj['year'] = value;
        obj['company'] = company;
        obj['mertric'] = metric;
        getMetrics.push(obj)

      }
    }

    this.groupedMertics = this.groupBy(getMetrics, 'mertric');
    this.menuList;
    for (let group in this.groupedMertics) {
      this.menuList.push({ id: group, label: group })
    }

  }
  selectedMenuInfo: any;

  selectedMenu(menu:any) {
    const matchedMetric = this.groupedMertics[menu.id];
    let generateObj:any = {
      labels: [],
      datasets: []
    };
   
    for (let j = 0; j < matchedMetric.length; j++) {
      const loopValue:any = matchedMetric[j]
      generateObj['labels'].push(loopValue.company);

      for (let metric in loopValue.year) {
        let obj:any = {};
        obj['label'] = metric;
        obj['data'] = loopValue.year[metric];
        generateObj['datasets'].push(obj);
      }
    }

    const grouped1 = this.groupBy(generateObj.datasets, 'label');
       
    let datasets = [];
    for (let metric in grouped1) {
      let newObj:any = {};
      newObj['label'] = metric;
      newObj['data'] = grouped1[metric].map((res:any) => {

        return res.data
      });
      datasets.push(newObj)
    }
              console.log(datasets)
    generateObj.datasets = datasets;

    const finalObj = { 
      labels: generateObj.labels, 
      datasets: generateObj.datasets
       }
    this.selectedMenuInfo = finalObj;
  }
  
  }

