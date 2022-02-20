import { TextFieldModule } from "@angular/cdk/text-field";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

const mod = [MatFormFieldModule, MatIconModule, ReactiveFormsModule, MatInputModule, TextFieldModule, MatSelectModule];

@NgModule({
    imports: [...mod],
    exports: [...mod]
})
export class MatModule {}