import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from 'app/Core/logger.service';
import { DataService } from 'app/Core/data.service';
import { PlainLoggerService } from './plain-logger.service';
import { core } from '@angular/compiler';
import { throwIfAlreadyLoaded } from './module-import-guard';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    // any component that request LoggerService in their constructor, they will get an instance of PlainLoggerService, as both of them has same interface
    // this is just different way of creating a service, the instructor just show unneeded funtionality for you :), at least now
    { provide: LoggerService, useClass: PlainLoggerService },
    DataService]
})
export class CoreModule {

  // @SkipSelf() asks injector to check if there is existing instance of the module in the parent injector
  // @Optional pass null if no instance is found
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule')
  }
}
