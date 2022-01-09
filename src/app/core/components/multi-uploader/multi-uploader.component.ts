import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-multi-uploader',
  templateUrl: './multi-uploader.component.html',
  styleUrls: ['./multi-uploader.component.scss']
})
export class MultiUploaderComponent implements OnInit {
  imgURL = 'assets/images/icons/hcp-cloud-icon.svg';
  @Input() disabled = false;
  @Input() imageTextTitle = 'Upload  Image';
  @Input() mediaType = 'image';
  @Input() width :string = null;
  @Input() id = '1';
  @Input() required : boolean =false;
  @Output() onChange = new EventEmitter();
  @Output() previewImage = new EventEmitter();
  @Output() imageEvent = new EventEmitter();

  @Output() sendFile: EventEmitter<object> = new EventEmitter<object>();
  private file: any;
  private isImg: boolean;
  public uploadText = 'Browse..';
// Will put this title inside (upload your (fileTitle) here).
  @Input() fileTitle: string;
  public imgUrl: SafeUrl;
  uploadTitle = 'Upload';
  images: any[] = [];
  @Input() multiple: boolean = false;
  imageFiles: any[] = [];
  url: string | ArrayBuffer;

  // Set the image url if you already have a one
  @Input('imgUrl')
  set imgSrc(url) {
    this.imgUrl = url;
    this.setUploadText(url);
  }
  constructor() { }

  ngOnInit(): void {
  }


  // tslint:disable-next-line:typedef
  setUploadText(url) {
    const replace = ('Replace');
    this.uploadText = url ? ` ${replace} ` : 'Browse..';
    this.uploadTitle = (this.imgUrl) ? replace : 'Upload';
  }

  // tslint:disable-next-line:typedef
  openFileDialog(file) {
    if (this.disabled) {
      return;
    }
    file.click();
  }

  // tslint:disable-next-line:typedef
  public sendToParent() {
    this.sendFile.emit(this.file);
  }

  // tslint:disable-next-line:typedef
  removeImage(index) {
    if (this.images.length > 0) {
      this.images.splice(index, 1);
      this.imageFiles.splice(index, 1);


      this.onChange.emit(this.imageFiles);
    }
  }

  // tslint:disable-next-line:typedef
  preview(event) {

    const files = event.target.files;
    this.imageEvent.emit(event);
    if (files.length === 0) {
      return;

    }
    if (this.multiple) {
      for (let index = 0; index < files.length; index++) {
        this.showMultiImageFile(event.target.files[index]);

      }
      this.onChange.emit(this.imageFiles);
    } else {
      if (this.mediaType === 'video') {


        const videoNameElement: any = document.getElementById('video-upload' + this.id);

        this.showVideoFile(files[0]);
        document.getElementById('fileName' + this.id).innerHTML = videoNameElement.value.split('\\').pop();
      } else {
        this.showImageFile(files[0]);
      }

    }


  }

  // tslint:disable-next-line:typedef
  showVideoFile(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      // tslint:disable-next-line:no-angle-bracket-type-assertion
      this.url = (<FileReader> event.target).result;
    };
    this.onChange.emit(file);
  }

  // tslint:disable-next-line:typedef
  showImageFile(file) {
    const mimeType = file.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    this.imgURL = URL.createObjectURL(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    this.onChange.emit(file);
    this.imageEvent.emit(this.imgURL);
    this.previewImage = file;
    this.sendToParent();
  }

  // tslint:disable-next-line:typedef
  showMultiImageFile(file) {
    const mimeType = file.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    this.images.push(URL.createObjectURL(file));
    this.imageFiles.push(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
  }

}
