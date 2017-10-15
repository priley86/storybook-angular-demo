import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWrapperComponent } from './hello-wrapper.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HelloWrapperComponent],
  exports: [HelloWrapperComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HelloModule {}
