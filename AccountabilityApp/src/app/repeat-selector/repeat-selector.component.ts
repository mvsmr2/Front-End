import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-repeat-selector',
  templateUrl: './repeat-selector.component.html',
  styleUrls: ['./repeat-selector.component.scss'],
})
export class RepeatSelectorComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  async presentModal() 
  {
    const modal = await this.modalController.create({
      component: RepeatSelectorComponent,
      //cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({//uhh idk
      'dismissed': true
    });
  }

  cancelled()
  {
    this.repeatCancel=true
    this.dismiss()
  }

  //vars
  public repeatCancel: boolean = false
  public weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  public date: string = new Date().toISOString();
  public time: any = new Date().getTime();
  public currYear: string = new Date().toLocaleDateString();
  public maxDate : any = (new Date()).getFullYear() + 2;

  ngOnInit() {}


}
