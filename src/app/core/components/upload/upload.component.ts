import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  imgURL = 'assets/images/icons/hcp-cloud-icon.svg';
  label = 'Load Image';
  @Output() sendFile: EventEmitter<any> = new EventEmitter<any>();
  imageExist = false;
  imageSrc;
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      const fileTypes = ['image/jpg', 'image/jpeg', 'image/png'];
      this.label = file.name;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imgURL = reader.result as string;
        this.imageExist = true;
      };
    }
    this.sendFile.emit(this.imgURL);
  }

  // tslint:disable-next-line:typedef
  removeImage() {
    this.label = 'Load Image';
    this.imgURL = 'assets/images/icons/hcp-cloud-icon.svg';
    this.imageExist = false;
  }


}
