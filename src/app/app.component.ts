import { Component, ViewChild, ElementRef } from '@angular/core';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food-bill';

  Puff_Item:number = 0;
  Dabeli_Item:number = 0;
  Sandwich_Item:number = 0;
  Vadapav_Item:number = 0;
  Puff_ADD()
  {
     this.Puff_Item = this.Puff_Item + 1;   
  }
  Puff_MINUS()
  {
    if(this.Puff_Item == 0)
    {
      this.Puff_Item = 0;  
    }
    else{
      this.Puff_Item = this.Puff_Item - 1;  
    }
  }

  Dabeli_ADD()
  {
     this.Dabeli_Item = this.Dabeli_Item + 1;   
  }
  Dabeli_MINUS()
  {
    if(this.Dabeli_Item == 0)
    {
      this.Dabeli_Item = 0;  
    }
    else{
      this.Dabeli_Item = this.Dabeli_Item - 1;  
    }
  }

  Sandwich_ADD()
  {
    this.Sandwich_Item = this.Sandwich_Item + 1;
  }
  Sandwich_MINUS()
  {
    if(this.Sandwich_Item == 0)
    {
      this.Sandwich_Item = 0;
    }
    else{
      this.Sandwich_Item = this.Sandwich_Item - 1;
    }
  }


  Vadapav_ADD()
  {
    this.Vadapav_Item = this.Vadapav_Item + 1;
  }
  Vadapav_MINUS()
  {
    if(this.Vadapav_Item == 0)
    {
      this.Vadapav_Item = 0;
    }
    else{
      this.Vadapav_Item = this.Vadapav_Item - 1;
    }
  }
  
  totalpuff:number;
  totaldabeli:number;
  totalsandwich:number;
  totalvadapav:number;
  totalbill:number;
  pf_fld_bill:Boolean = false;
  vd_fld_bill:Boolean = false;
  dbl_fld_bill:Boolean = false;
  snd_fld_bill:Boolean = false;

  demo()
  {
    this.totalvadapav = this.Vadapav_Item * 15;
    this.totalpuff = this.Puff_Item * 20;
    this.totalsandwich = this.Sandwich_Item * 25;
    this.totaldabeli = this.Dabeli_Item * 15;
    this.totalbill = this.totalpuff + this.totalvadapav + this.totalsandwich + this.totaldabeli;

    /*puff field in bill*/
    if(this.totalpuff == 0)
    { 
      this.pf_fld_bill = false;
    }
    else{
      this.pf_fld_bill = true;
    }

    /*dabeli field in bill*/
    if(this.totaldabeli == 0)
    {
      this.dbl_fld_bill = false;
    }
    else{
      this.dbl_fld_bill = true;
    }

    /*vadapav field in bill*/
    if(this.totalvadapav == 0)
    {
      this.vd_fld_bill = false;
    }
    else{
      this.vd_fld_bill = true;
    }

    /*sandwich field in bill*/
    if(this.totalsandwich == 0)
    {
      this.snd_fld_bill = false;
    }
    else{
      this.snd_fld_bill = true;
    }
  }

  @ViewChild('content') content: ElementRef;

  public namePDF()
  {
    let doc = new jspdf();
    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML,15,15,{
      'width':190,
    });
    doc.save('demo.pdf');
  }
}
