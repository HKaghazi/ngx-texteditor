# Free Native Texteditor for Angular +6

**simple native texteditor (WYSIWYG) for angular 6+ containing all components you need!**


![demo1](https://user-images.githubusercontent.com/28312770/70859572-39ae4b00-1f2b-11ea-927b-42f0e3b95514.png)


## Support
If you like my work please comment and suggest<br/>
please submit issues in order to fix any bugs and improvment of package<br/>

## Examples
-- [demo]() on stackblitz <br/>
-- [demo]() on guthub pages <br/>


## Prerequisites
    angular/core >= 6.0.0
    angular/common >= 6.0.0
    font-awesome >= 4.0.0

## Installing
    npm i ng-texteditor font-awesome

## Usage
1-Import `TexteditorModule` to app.module.ts

    import { TexteditorModule } from 'ng-texteditor'; // <-- add this line
    @NgModule({
    declarations: [
        ...
    ],
    imports: [
        BrowserModule,
        TexteditorModule   // <-- and this line
    ],
    providers: [...],
    bootstrap: [AppComponent]
    })


2-Code `<ng-texteditor></ng-texteditor>` anywhere you like 

3-Insert `Options`

    <ng-texteditor [id]="'id'" [placeholder]="'Place Holder'" tabIndex="TabIndexNumber | null"  [(ngModel)]="fruit" [config]="config"></ng-texteditor> 

## Options

### Inputs
* editable `<Boolean>` : `true`
* spellcheck `<Boolean>` : `true`
* height `<String>`: `'auto'`
* minHeight `<String>`: `'0'`
* maxHeight `<String>`: `'auto'`
* width `<String>` : `'auto'`
* minWidth `<String>` : `'0'`
* translate `<String>` : `'yes'`
* enableToolbar `<Boolean>` : `true`
* showToolbar `<Boolean>` : `true`
* placeholder `<String>` : `'Enter text here...'`
* defaultParagraphSeparator `<String>` : `''`
* defaultFontName `<String>` : `''`
* defaultFontSize `<String>` : `''`
* fonts `<Array>` : `[
{class: 'arial', name: 'Arial'},
{class: 'times-new-roman', name: 'Times New Roman'},
{class: 'calibri', name: 'Calibri'},
{class: 'comic-sans-ms', name: 'Comic Sans MS'}
]`
* uploadUrl `<String>` : `'v1/image'`
* sanitize `<Boolean>` : `true`
* toolbarPosition `<String>` : `'top'`
* outline `<Boolean>` : `true`

### Outputs
* onChange() : (value: string) => void
* onTouched() : () => void