import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AeSelectComponent } from './ae-select/ae-select.component';
import { TextEditorToolbarComponent } from './texteditor-toolbar.component';
import { TexteditorComponent } from './texteditor.component';




@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  declarations: [TexteditorComponent, TextEditorToolbarComponent, AeSelectComponent],
  exports: [TexteditorComponent, TextEditorToolbarComponent]
})
export class TexteditorModule { }
