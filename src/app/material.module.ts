import { NgModule } from '@angular/core';
import { MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    MatExpansionModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule   
  ],
  exports: [
    MatExpansionModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [ MatDatepickerModule ],
})

export class MaterialModule {}