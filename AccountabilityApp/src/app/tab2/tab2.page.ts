import { Component } from '@angular/core';
// import { time } from 'node:console';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  // IDK I ADDED THIS TO FIX DATETIME MAX AND MIN
  public date: string = new Date().toISOString();
  public time: any = new Date().getTime();
  public currYear: string = new Date().toLocaleDateString();
  public maxDate : any = (new Date()).getFullYear() + 2;
  // public currHour: any = new Date().getHours() % 12 || 12
  public currHour24: any = new Date().getHours() //still in 24 hr
  public currAMPM: string = this.currHour24 >= 12? 'PM' : 'AM';
  //make currHour in 12hr format
  public currHour12: any = this.currHour24 % 12 || 12
  // public currMinute: any = new Date().getMinutes();
  // mins = ('0'+current_date.getMinutes()).slice(-2);
  public currMinute: any = ('0' + (new Date().getMinutes())).slice(-2)
  public currTime: any = this.currHour12 + ":" + this.currMinute + " " + this.currAMPM;

  public buddies = ['Bud1', 'Bud2', 'Steve', 'Bud4']


}


