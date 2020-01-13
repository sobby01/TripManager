import { Component, OnInit, OnDestroy} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginComponent } from './login/login.component'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , OnDestroy{
  private modalRef: BsModalRef;
  breadcrumbList: Array<any> = [];
  myObserver = null;
  constructor(
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.listenRouting();
  }

  ngOnDestroy() {
    this.myObserver.unsubscribe();
}

  Login(){
    const initialState = {
      Name: 'Hello',
    };
    this.modalRef = this.modalService.show(
      LoginComponent,
      Object.assign({ animated: true, keyboard: true, backdrop: 'static', 
      ignoreBackdropClick: false, ariaHidden: true }, 
      { class: 'mrk-def-modal approve-task-modal modal-dialog-centered' }, 
      { initialState })
    );
  }

  listenRouting() {
    let routerUrl: string, routerList: Array<any>, target: any;
    this.myObserver = this.router.events.subscribe((router: any) => {
      routerUrl = router.urlAfterRedirects;

      if (routerUrl && typeof routerUrl === 'string') {
        routerList = routerUrl.slice(1).split('/');
        if(routerList.length > 0){
          this.breadcrumbList.length = 0;
        routerList.forEach((router, index) => {
          
          if(router != ''){
           
            this.breadcrumbList.push({
              name: router,
              path: (index === 0) ? router :  `${this.breadcrumbList[index-1].path}`
            });
          }
        
         
        });}
        else{
          if(this.breadcrumbList.length<=0 ||this.breadcrumbList.find(x => x.Name=='Home') < 0){
          this.breadcrumbList.push({
            name: 'Home',
            path: 'Home'
          });}
        }
      }
      else if(routerUrl == undefined){
        if(this.breadcrumbList.length<=0 || this.breadcrumbList.find(x => x.Name=='Home') < 0){
          this.breadcrumbList.push({
            name: 'Home',
            path: 'Home'
          });
        }       
      }
    });
  }
}