import { Component, OnInit, OnDestroy} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginComponent } from './login/login.component'
import { Router, ActivatedRoute , NavigationEnd,Params, PRIMARY_OUTLET} from '@angular/router';

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

// private getBreadcrumbs(route: ActivatedRoute, url: string="", breadcrumbs: Array<any>[]=[]) {
//   const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

//   //get the child routes
//   let children: ActivatedRoute[] = route.children;

//   //return if there are no more children
//   if (children.length === 0) {
//     return breadcrumbs;
//   }
//    //iterate over each children
//    for (let child of children) {
//     //verify primary route
//     if (child.outlet !== PRIMARY_OUTLET) {
//       continue;
//     }

//     //verify the custom data property "breadcrumb" is specified on the route
//     if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
//       return this.getBreadcrumbs(child, url, breadcrumbs);
//     }

//     //get the route's URL segment
//     let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");

//     //append route URL to URL
//     url += `/${routeURL}`;

//     //add breadcrumb
//     let breadcrumb: IBreadcrumb = {
//       label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
//       params: child.snapshot.params,
//       url: url
//     };
//     breadcrumbs.push(breadcrumb);

//     this.breadcrumbList.push({
//       name: 'Home',
//       path: 'Home'
//     });
    
//     //recursive
//     return this.getBreadcrumbs(child, url, breadcrumbs);
//   }
  
//   //we should never get here, but just in case
//   return breadcrumbs;

// }

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
      if (router instanceof NavigationEnd) {
      routerUrl = router.urlAfterRedirects;

      if (routerUrl && typeof routerUrl === 'string') {
        routerList = routerUrl.slice(1).split('/');
        if(routerList.length > 0){
          if(routerList.length == 1 && routerList[0] ==''){
            this.breadcrumbList.length = 0;
            if(this.breadcrumbList.length<=0 || this.breadcrumbList.find(x => x.Name=='Home') < 0){
              this.breadcrumbList.push({
                name: 'Home',
                path: 'Home'
              });
            }    
          }
          else
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
      }}
    });
  }
}