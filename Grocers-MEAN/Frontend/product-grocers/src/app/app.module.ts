import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// import { ExampleCompComponent } from './example-comp/example-comp.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeTicketComponent } from './employee-ticket/employee-ticket.component';
import { LoginPageComponent } from './login-page/login-page.component';
// import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';
// import { EditProjectsComponent } from './edit-projects/edit-projects.component';
import { ViewRequestsComponent } from './view-requests/view-requests.component';
// import { EditEmployeesComponent } from './edit-employees/edit-employees.component';
// import { CartComponent } from './cart/cart.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { SendRequestComponent } from './send-request/send-request.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UpdateProductComponent } from './product-components/update-product/update-product.component';
import { DeleteProductComponent } from './product-components/delete-product/delete-product.component';
import { AddProductComponent } from './product-components/add-product/add-product.component';
import { RetrieveProductsComponent } from './product-components/retrieve-products/retrieve-products.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component'; 
import { AddFundsComponent } from './add-funds/add-funds.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserComponent } from './components/home-page/user/user.component';
import { AdminComponent } from './components/home-page/admin/admin.component';
import { EmployeeComponent } from './components/home-page/employee/employee.component';
import { CartComponent } from './cart/cart.component';
import { StoreItemsComponent } from './cart/store-items/store-items.component';
import { DeleteItemsComponent } from './cart/delete-items/delete-items.component';
import { UpdateQuantityComponent } from './cart/update-quantity/update-quantity.component';
import { ViewItemsComponent } from './cart/view-items/view-items.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { GenerateReportsComponent } from './generate-reports/generate-reports.component';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,

    ViewRequestsComponent,
  
    ProfileInfoComponent,
    SendRequestComponent,
    EmployeeTicketComponent,
    SignUpComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    AddProductComponent,
    RetrieveProductsComponent,
    DeleteEmployeeComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomePageComponent,
    UserComponent,
    AdminComponent,
    EmployeeComponent,
    CartComponent,
    StoreItemsComponent,
    DeleteItemsComponent,
    UpdateQuantityComponent,
    ViewItemsComponent,
    OrderStatusComponent,
    UpdateOrderComponent,
    AddEmployeeComponent,
    GenerateReportsComponent,
    AddFundsComponent,
    RaiseTicketComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '', pathMatch: 'full', redirectTo: 'login-page'
      },
      {path: 'retrieve-products', component: RetrieveProductsComponent},
      {path: 'add-product', component: AddProductComponent},
      {path: 'delete-product', component: DeleteProductComponent},
      {path: 'update-product', component: UpdateProductComponent},
      {path: 'sign-up', component: SignUpComponent},
      {path: 'employee-ticket', component: EmployeeTicketComponent},
      {path: 'view-requests', component: ViewRequestsComponent},
      {path: 'send-requests', component: SendRequestComponent},
      {path: 'profile-info', component: ProfileInfoComponent},
      {path: 'orders', component: OrderStatusComponent},
      {path: 'add-funds', component: AddFundsComponent},
      {path: 'login-page', component: LoginPageComponent},
      {path: 'user', component: UserComponent},
      {path: 'cart', component: CartComponent},
      {path: 'home-page', component: HomePageComponent},
      {path: 'store-items', component: StoreItemsComponent},
      {path: 'delete-items', component: DeleteItemsComponent},
      {path: 'update-quantity', component: UpdateQuantityComponent},
      {path: 'view-items', component: ViewItemsComponent},
      {path: 'order-status', component: UpdateOrderComponent},
      {path : 'add-employee' , component : AddEmployeeComponent},
      {path : 'raise-ticket' , component : RaiseTicketComponent},
      
    
      {path: 'delete-employee', component: DeleteEmployeeComponent},
      {path: 'generate-reports', component: GenerateReportsComponent},
      
      
      // {path: '/', redirectTo: '/login-page', pathMatch: 'full'},
      {path: 'home-page', component: HomePageComponent}
      

    ]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
