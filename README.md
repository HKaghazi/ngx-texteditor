# Free Native Texteditor for Angular +6

**simple native texteditor (WYSIWYG) for angular 6+ containing all components you need!**


![demo1](https://user-images.githubusercontent.com/28312770/70859572-39ae4b00-1f2b-11ea-927b-42f0e3b95514.png)


## Support
If you like my work please comment and suggest<br/>
please submit issues in order to fix any bugs and improvment of package<br/>

## Examples
-- [demo]() on stackblitz <br/>
-- [demo]() on guthub pages <br/>


## Requirements
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


2-Add `<ng-texteditor></ng-texteditor>` anywhere you like 

... documentation will updates soon