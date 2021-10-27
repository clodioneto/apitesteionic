import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, private apiservice: ApiService) {
    //this.readData();
    this.creatData();
   }
    
  ngOnInit() {
    // this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
    creatData() {
      const data: any = {
        title: 'Clodio',
        body: 'Teste',
        userId: 10
      }
      this.apiservice.createData(data).subscribe(data => {
        console.log(data);
      })
    }

  readData() {
    this.apiservice.readData().subscribe(data => {
      console.log(data);
    })
  }

}
