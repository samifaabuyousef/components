import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { PopupComponent } from 'src/app/core/components/popup/popup.component';
import { BrandService } from '../brand.service';
import { Option } from '../models/option.model';



@Component({
  selector: 'app-add-edit-brand',
  templateUrl: './add-edit-brand.component.html',
  styleUrls: ['./add-edit-brand.component.scss']
})
export class AddEditBrandComponent implements OnInit {
  loading: any = false;
  public form: FormGroup;
  title: any;
  isSubmitting = false;
  pageTitle: any = 'Add';
  isAdd: any = true;
  isImageExist = false;
  imagePreview: any;
  currentImageName: null;
  private imageStatus: string;
  advertiserList: any = [];
  countryArray: any = [];
  phoneMap: any = [];
  private successMessage: string;
  private notValidErrorMessage: string;
  countryMap: any = [];
  option: Option [] = [
    {id: '1', name: 'test'},
    {id: '2', name: 'test2'}
  ];
  List = ['Choice 1', 'Choice 2', 'Choice 3'];
  constructor(    private route: ActivatedRoute,
                  private router: Router,
                  private fb: FormBuilder,
                  private brandService: BrandService,
                  public dialog: MatDialog) {
                    this.initForm();
                  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  private initForm() {
    const fb = this.fb;
    this.form = fb.group({
      advertiser_id: fb.control('', [Validators.required]),
      name: fb.control('', [Validators.required, Validators.maxLength(100)]),
      generic_name: fb.control('', [Validators.required, Validators.maxLength(100)]),
      media: fb.control(''),
    });
  }



  // tslint:disable-next-line:typedef
  submit() {


  }
  // tslint:disable-next-line:typedef
  selectedOption(event) {
    console.log(event);
  }

  // tslint:disable-next-line:typedef
  selectedChanges(event) {
    console.log(event);
  }

  // tslint:disable-next-line:typedef
  getDate(event) {
    console.log(event);
  }




  // tslint:disable-next-line:typedef
  imageChanged(file) {
    this.imageStatus = 'add';
    this.currentImageName = file.name;
    this.form.patchValue({image: file});
    this.form.get('image').markAsDirty();
    this.imagePreview = null;

  }

  // tslint:disable-next-line:typedef
  removeImage() {
    this.imageStatus = 'remove';
    this.imagePreview = '';
    this.isImageExist = false;
  }



}
