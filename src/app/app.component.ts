import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fileSaver';

  constructor(private http: HttpClient) {}

  // downlaodfile() {
  //   saveAs(
  //     '	https://backendbirma.s3.ap-south-1.amazonaws.com/birmaaKN7k9FAwwOfi6FfqCI%3D.jpeg',
  //     'image.jpg'
  //   );
  // }

  downlaodfile() {
    this.http
      .get(
        'https://backendbirma.s3.ap-south-1.amazonaws.com/birmaaKN7k9FAwwOfi6FfqCI%3D.jpeg',
        { responseType: 'blob' }
      )
      .subscribe((res: any) => {
        console.log(res);

        saveAs(res, 'file');
      });
  }
}
