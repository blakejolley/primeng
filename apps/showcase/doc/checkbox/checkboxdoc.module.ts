import { AppCodeModule } from '@/components/doc/app.code.component';
import { AppDocModule } from '@/components/doc/app.doc.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { DisabledDoc } from './disableddoc';
import { DynamicDoc } from './dynamicdoc';
import { FilledDoc } from './filleddoc';
import { ImportDoc } from './importdoc';
import { IndeterminateDoc } from './indeterminatedoc';
import { InvalidDoc } from './invaliddoc';
import { LabelDoc } from './labeldoc';
import { MultipleDoc } from './multipledoc';
import { ReactiveFormsDoc } from './reactiveformsdoc';
import { TemplateDrivenFormsDoc } from './templatedrivenformsdoc';
import { SizesDoc } from './sizesdoc';
import { StyleDoc } from './styledoc';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, AppCodeModule, AppDocModule, CheckboxModule, ReactiveFormsModule, ToastModule, ButtonModule, MessageModule],
    exports: [ImportDoc, AppDocModule],
    declarations: [ImportDoc, BasicDoc, IndeterminateDoc, MultipleDoc, LabelDoc, DynamicDoc, DisabledDoc, InvalidDoc, StyleDoc, AccessibilityDoc, ReactiveFormsDoc, FilledDoc, SizesDoc, TemplateDrivenFormsDoc]
})
export class CheckboxDocModule {}
