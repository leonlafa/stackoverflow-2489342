import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from "./app.component";
import { UserComponent } from "./user.component";

//services
import { UserService } from "./user.service";

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [UserService],
  declarations: [AppComponent, UserComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
