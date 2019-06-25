import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";
import { format } from "util";
// import { FormGroup,FormControl,Validators } from '@angular/forms';
import { NgModule } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  RequiredValidator
} from "@angular/forms";
import { Button } from "protractor";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { Overlay, OverlayConfig, CdkOverlayOrigin } from "@angular/cdk/overlay";
import {
  ComponentPortal,
  TemplatePortalDirective,
  Portal,
  CdkPortal,
  TemplatePortal
} from "@angular/cdk/portal";
import { TextAreaComponent } from "../text-area/text-area.component";
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { viewClassName } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
// import {displayStructure} from 'src/app/displayStructure';
import { displayStructure } from '../displayStructure';
import { Identifiers } from '@angular/compiler/src/render3/r3_identifiers';
@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.css"],
  exportAs:"cdkPortal",
})
export class DisplayComponent implements OnInit {
  @ViewChild('backlogTemp',{static:false})
    backlogTemp:TemplateRef<any>;
  @ViewChild('currentTemp',{static:false})
    currentTemp:TemplateRef<any>;
  @ViewChild('validTemp',{static:false})
    validTemp:TemplateRef<any>;
    @ViewChild('newAct',{static:false})
    newAct:TemplateRef<any>;
    @ViewChild('doneTemp',{static:false})
    doneTemp:TemplateRef<any>;  
    @ViewChild('dotfunc',{static:false})
    dotfunc:TemplateRef<any>;
    @ViewChild('dotfunc1',{static:false})
    dotfunc1:TemplateRef<any>;
    @ViewChild('dotfunc2',{static:false})
    dotfunc2:TemplateRef<any>;
    @ViewChild('newGrid',{static:false})
    newGrid:TemplateRef<any>;
    @ViewChild('h5',{static:false})
    h5:ElementRef<any>;
    @ViewChild('td1',{static:false})
    td1:ElementRef<any>;
    @ViewChild('td2',{static:false})
    td2:ElementRef<any>;
    @ViewChild('base1',{static:false})
    base1: ElementRef<any>; 
    // @ViewChild('h5',{static:false})
    // h5: ElementRef<any>; 
    @ViewChild('card0',{static:false})
    card0: ElementRef<any>;  
  @ViewChild('base3',{static:false})
  base3:ElementRef<any>;
  @ViewChild('delList',{static:false})
  delList:TemplateRef<any>;
  @ViewChild('buton',{static:false})
  buton:ElementRef<any>;
  @ViewChild('sideButtonId',{static:false})
  sideButtonId:ElementRef<any>;
 
    done = [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ];
    justExtra=[];
    justExtra1=[];
    justExtra2=[];
    justExtra3=[];
    cards=4;
   selectedPortal: Portal<any>;
 gridContinerArray=displayStructure;
  templatePortal:TemplatePortal<any>;  //----------
   currentTask = ["Hey1", "Done1", "So is it working properly or not??"];
  validate = ["lol"];
  backlog=['Working?','Demo'];
  myForm: FormGroup;
  overlayRef: any;
  displayPortal: TemplatePortalDirective;
  overlayConfig: OverlayConfig;
  displayComp:displayStructure[] = [{header:'Backlog',cardsName:this.backlog},
                                 {header:'CurrentTask',cardsName:this.currentTask},
                                 {header:'Validate',cardsName:this.validate},
                                 { header:'Done...',cardsName:this.done} ];
  nForm: FormGroup;
  templateRef: Portal<any>;
  newArray= ['demo'];
  boardName:any;
  selectedCard: number;
    dumb=2;
  constructor(private overlay: Overlay,private _viewContainerRef: ViewContainerRef) {}
    
  ngOnInit() {
     this.nForm = new FormGroup({
      in1: new FormControl("",Validators.required),
      in2:new FormControl(''),
      in3:new FormControl(''),
      in4:new FormControl(''),
      boardName:new FormControl('',Validators.required),
      boardCard:new FormControl('',Validators.required )
    });
  }
  // .....................Drag-Drop Angular-CDK code............................

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
 
// ..............................................................................

onTap(w:any,i:any){
  this.selectedCard=i;
  console.log('selected Card:',this.selectedCard,'index',i);
}
 load(i:number) {
      if(i==0){
        const z=document.getElementById('down0');
        const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
        this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
        console.log('entered');
        this.overlayRef = this.overlay.create({ 
          positionStrategy,
         });
         this.overlayRef.attach(this.templatePortal);
      }
      if(i==1){
        const z=document.getElementById('down1');
        const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
        this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
        console.log('entered');
        this.overlayRef = this.overlay.create({ 
          positionStrategy,
         });
         this.overlayRef.attach(this.templatePortal); 
      }
      if(i==2){
        const z=document.getElementById('down2');
        const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
        this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
        console.log('entered');
        this.overlayRef = this.overlay.create({ 
          positionStrategy,
         });
         this.overlayRef.attach(this.templatePortal);
      }
      if(i==3){
        const z=document.getElementById('down3');
        const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
        this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
        console.log('entered');
        this.overlayRef = this.overlay.create({ 
          positionStrategy,
         });
         this.overlayRef.attach(this.templatePortal);
      }
      if(i==4){
        const z=document.getElementById('down4');
        const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
        this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
        console.log('entered');
        this.overlayRef = this.overlay.create({ 
          positionStrategy,
         });
         this.overlayRef.attach(this.templatePortal);
      }
      if(i==5){
        const z=document.getElementById('down5');
        const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
        this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
        console.log('entered');
        this.overlayRef = this.overlay.create({ 
          positionStrategy,
         });
         this.overlayRef.attach(this.templatePortal);   
      }
      if(i==6){
        const z=document.getElementById('down6');
        const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
        this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
        console.log('entered');
        this.overlayRef = this.overlay.create({ 
          positionStrategy,
         });
         this.overlayRef.attach(this.templatePortal);    
      }
      if(i==7){
        const z=document.getElementById('down7');
        const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
        this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
        console.log('entered');
        this.overlayRef = this.overlay.create({ 
          positionStrategy,
         });
         this.overlayRef.attach(this.templatePortal);
      }   
  }

load1(){
 let i=this.selectedCard;
  if(i==0){
    const z=document.getElementById('down0');
    const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
    this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
     this.overlayRef.attach(this.templatePortal);
  }
  if(i==1){
    const z=document.getElementById('down1');
    const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
    this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
     this.overlayRef.attach(this.templatePortal); 
  }
  if(i==2){
    const z=document.getElementById('down2');
    const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
    this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
     this.overlayRef.attach(this.templatePortal);
  }
  if(i==3){
    const z=document.getElementById('down3');
    const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
    this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
     this.overlayRef.attach(this.templatePortal);
  }
  if(i==4){
    const z=document.getElementById('down4');
    const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
    this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
     this.overlayRef.attach(this.templatePortal);
  }
  if(i==5){
    const z=document.getElementById('down5');
    const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
    this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
     this.overlayRef.attach(this.templatePortal);   
  }
  if(i==6){
    const z=document.getElementById('down6');
    const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
    this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
     this.overlayRef.attach(this.templatePortal);    
  }
  if(i==7){
    const z=document.getElementById('down7');
    const positionStrategy=this.overlay.position().connectedTo(z,{originX:'start',originY:'top'},{overlayX:'start',overlayY:'bottom'});
    this.templatePortal= new TemplatePortal(this.backlogTemp,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
     this.overlayRef.attach(this.templatePortal);
  }   
  
}

  sideButton() {
    console.log("working.....");
      const positionStrategy=this.overlay.position().global().centerHorizontally().centerVertically();
      this.templatePortal=new TemplatePortal(this.newGrid,this._viewContainerRef); 
      this.overlayRef=this.overlay.create({
        width:10000000,
        height:1000000,
        positionStrategy  
      });
      this.overlayRef.attach(this.templatePortal);
  }

    addBoard(){
      console.log(this.nForm.value.boardName);
      console.log(this.nForm.value.boardCard);
      if(this.cards>=8){
       window.alert('Max 8 cards can be there!');
      }
    else{
      this.displayComp.push({
        header:this.nForm.value.boardName,
        cardsName:this.justExtra,
      });
      this.nForm.reset();
     this.overlayRef.dispose();
   this.cards++;
    } 
   }
  

  //  ...............3-Dots function()............
dots(i:number){
  
  if(i==0){
      const v=document.getElementById('header0');
      const positionStrategy=this.overlay.position().connectedTo(v,{originX:'end',originY:'bottom'},{overlayX:'start',overlayY:'top'});
      this.templatePortal= new TemplatePortal(this.dotfunc,this._viewContainerRef);
        console.log('entered');
        this.overlayRef = this.overlay.create({ 
          positionStrategy,
         });
       this.overlayRef.attach(this.templatePortal);
      
  }
  console.log('3-dot function-1');
  if(i==1){
    const v=document.getElementById('header1');
    const positionStrategy=this.overlay.position().connectedTo(v,{originX:'end',originY:'bottom'},{overlayX:'start',overlayY:'top'});
    this.templatePortal= new TemplatePortal(this.dotfunc,this._viewContainerRef);
      console.log('entered');
      this.overlayRef = this.overlay.create({ 
        positionStrategy,
       });
     this.overlayRef.attach(this.templatePortal);
    
} 
if(i==2){
  const v=document.getElementById('header2');
  const positionStrategy=this.overlay.position().connectedTo(v,{originX:'end',originY:'bottom'},{overlayX:'start',overlayY:'top'});
  this.templatePortal= new TemplatePortal(this.dotfunc,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
   this.overlayRef.attach(this.templatePortal);
  
} 
if(i==3){
  const v=document.getElementById('header3');
  const positionStrategy=this.overlay.position().connectedTo(v,{originX:'end',originY:'bottom'},{overlayX:'start',overlayY:'top'});
  this.templatePortal= new TemplatePortal(this.dotfunc,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
   this.overlayRef.attach(this.templatePortal);
  
} 
if(i==4){
  const v=document.getElementById('header4');
  const positionStrategy=this.overlay.position().connectedTo(v,{originX:'end',originY:'bottom'},{overlayX:'start',overlayY:'top'});
  this.templatePortal= new TemplatePortal(this.dotfunc,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
   this.overlayRef.attach(this.templatePortal);  
}  
if(i==5){
  const v=document.getElementById('header5');
  const positionStrategy=this.overlay.position().connectedTo(v,{originX:'end',originY:'bottom'},{overlayX:'start',overlayY:'top'});
  this.templatePortal= new TemplatePortal(this.dotfunc,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
   this.overlayRef.attach(this.templatePortal);
  
} 
if(i==6){
  const v=document.getElementById('header6');
  const positionStrategy=this.overlay.position().connectedTo(v,{originX:'end',originY:'bottom'},{overlayX:'start',overlayY:'top'});
  this.templatePortal= new TemplatePortal(this.dotfunc,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
   this.overlayRef.attach(this.templatePortal);
  
}  
if(i==7){
  const v=document.getElementById('header7');
  const positionStrategy=this.overlay.position().connectedTo(v,{originX:'end',originY:'bottom'},{overlayX:'start',overlayY:'top'});
  this.templatePortal= new TemplatePortal(this.dotfunc,this._viewContainerRef);
    console.log('entered');
    this.overlayRef = this.overlay.create({ 
      positionStrategy,
     });
   this.overlayRef.attach(this.templatePortal);
  
}  
  


  }
  
  dots1(){
    console.log('3-dot function-1');
    const positionStrategy=this.overlay.position().connectedTo(this.td1,{originX:'start',originY:'bottom'},{overlayX:'start',overlayY:'bottom'});
    this.templatePortal= new TemplatePortal(this.dotfunc1,this._viewContainerRef);
      console.log('entered');
      this.overlayRef = this.overlay.create({ 
        positionStrategy,
       });
     this.overlayRef.attach(this.templatePortal)
  }
   

//.....to remove the last task from the speicifc card.....

undoFunction(i:number){
  
        console.log('inside undo:',i);
        if(this.selectedCard==0){
          this.backlog.splice(this.backlog.length-1,1);
          this.overlayRef.dispose();
        }
        else if(this.selectedCard==1){
          this.currentTask.splice(this.currentTask.length-1,1);
          this.overlayRef.dispose();
        }
        else if(this.selectedCard==2){
          this.validate.splice(this.validate.length-1,1);
          this.overlayRef.dispose();
        }
        else if(this.selectedCard==3){
          this.done.splice(this.done.length-1,1);
        }
        else if(this.selectedCard==4){
          this.justExtra.splice(this.justExtra.length-1,1);
        }
        else if(this.selectedCard==5){
          this.justExtra1.splice(this.justExtra1.length-1,1);
        }
        else if(this.selectedCard==6){
          this.justExtra2.splice(this.justExtra2.length-1,1);
        }
        else if(this.selectedCard==7){
          this.justExtra3.splice(this.justExtra3.length-1,1);
        }
        else{
          window.alert('Something went wrong!');
        }
}

// used to move all the tasks from one card to another....

moveTo(j:number){
     let  i=this.selectedCard;
    console.log(this.backlog.length);
    console.log('moveda to array:',this.displayComp[j].cardsName);
    if(i==j){
      window.alert("not possible!");
      this.overlayRef.dispose();
      
    }
    if(i==0){
      for(let k=0;k<this.backlog.length;k++){
            this.displayComp[j].cardsName.push(this.backlog[k]);  
            this.overlayRef.dispose();    
      }
      this.backlog.splice(0,this.backlog.length);
           
    }  
    if(i==1){
      for(let k=0;k<this.currentTask.length;k++){
            this.displayComp[j].cardsName.push(this.currentTask[k]); 
            this.overlayRef.dispose();     
      }
      this.currentTask.splice(0,this.currentTask.length);
    } 
    if(i==2){
      for(let k=0;k<this.validate.length;k++){
            this.displayComp[j].cardsName.push(this.validate[k]);  
            this.overlayRef.dispose();    
      }
      this.validate.splice(0,this.validate.length);
    }
    if(i==3){
      for(let k=0;k<this.done.length;k++){
            this.displayComp[j].cardsName.push(this.done[k]);
            this.overlayRef.dispose();      
      }
      this.done.splice(0,this.done.length);
    }

   
 }

 // ..... used to copy content from one card to another...

 copyTo(j:number){
  let  i=this.selectedCard;
  console.log(this.backlog.length);
  console.log('moveda to array:',this.displayComp[j].cardsName);
  if(i==j){
    window.alert("not possible!");
    this.overlayRef.dispose();
    
  }
  if(i==0){
    for(let k=0;k<this.backlog.length;k++){
          this.displayComp[j].cardsName.push(this.backlog[k]);  
          this.overlayRef.dispose();    
    }
         
  }  
  if(i==1){
    for(let k=0;k<this.currentTask.length;k++){
          this.displayComp[j].cardsName.push(this.currentTask[k]); 
          this.overlayRef.dispose();     
    }
  } 
  if(i==2){
    for(let k=0;k<this.validate.length;k++){
          this.displayComp[j].cardsName.push(this.validate[k]);  
          this.overlayRef.dispose();    
    }
  }
  if(i==3){
    for(let k=0;k<this.done.length;k++){
          this.displayComp[j].cardsName.push(this.done[k]);
          this.overlayRef.dispose();      
    }
  }
}

    // ........Add something using overlay(Overlay)for all cards................
    add(i:number) {
      if(this.selectedCard>7){
        console.error('Max 8 cards are allowed!');
        
      }

          if(this.selectedCard==0){
            this.backlog.push(this.nForm.value.in1);
            this.nForm.reset();
            this.overlayRef.dispose();
          }
         else if(this.selectedCard==1){
            this.currentTask.push(this.nForm.value.in1);
            this.nForm.reset();
            this.overlayRef.dispose();
          
          }
         else if(this.selectedCard==2){
            this.validate.push(this.nForm.value.in1);
            this.nForm.reset();
            this.overlayRef.dispose();
          
          }
         else if(this.selectedCard==3){
            this.done.push(this.nForm.value.in1);
            this.nForm.reset();
            this.overlayRef.dispose();
           
          }
          else if(this.selectedCard==4){
            this.justExtra.push(this.nForm.value.in1);
            this.nForm.reset();
            this.overlayRef.dispose();
          }
          else if(this.selectedCard==5){
            this.justExtra1.push(this.nForm.value.in1);
            this.nForm.reset();
            this.overlayRef.dispose();
          }
          else if(this.selectedCard==6){
            this.justExtra2.push(this.nForm.value.in1);
            this.nForm.reset();
            this.overlayRef.dispose();
          }
          else if(this.selectedCard==7){
            this.justExtra3.push(this.nForm.value.in1);
            this.nForm.reset();
            this.overlayRef.dispose();
          }
          else{
           window.alert('Seems like something is wrong now!'); 
          }
          // this.nForm.reset();
      }
  
    // .........To close the overlay..................
   
    close() {
      this.overlayRef.dispose();
    }
// ............used to call(pop-up) the delete-List template...
  bellButton(){
    console.log('entered');
    const positionStrategy=this.overlay.position().connectedTo(this.buton,{originX:'start',originY:'bottom'},{overlayX:'end',overlayY:'top'});
    this.templatePortal=new TemplatePortal(this.delList,this._viewContainerRef);
    this.overlayRef=this.overlay.create({
        positionStrategy,
    });
    this.overlayRef.attach(this.templatePortal);
  }

  // ..............To remove the whole card from the container..........
  // (1) is called by the sidebar... (2) is called from the individual card
  deleteList(i){
    console.log('index',i);
    this.displayComp.splice(i,1); 
    this.overlayRef.dispose();
  }
  deleteList1(){
    this.displayComp.splice(this.selectedCard,1);
    this.overlayRef.dispose();
  }
}


  
    
    // load4(){
    //   // const positionStrategy=this.overlay.position().connectedTo(this.base4,{originX:'start',originY:'bottom'},{overlayX:'end',overlayY:'bottom'});
    //   this.templatePortal= new TemplatePortal(this.newAct,this._viewContainerRef);
    //   console.log('entered');
    //   this.overlayRef = this.overlay.create({ 

    //     // positionStrategy,
    //    });
    //    this.overlayRef.attach(this.templatePortal);
    
    // }



