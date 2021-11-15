import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class USERS {
  constructor(
  public mission_name: String,
  public mission_id: String,
  public manufacturers: any,
  public payload_ids: any,
  public wikipedia:String,
  public website:String,
  public twitter:String,
  public description:String
){}
}

@Component({
  selector: 'app-space-x',
  templateUrl: './space-x.component.html',
  styleUrls: ['./space-x.component.css']
})
export class SpaceXComponent implements OnInit {
  Users:USERS[] | undefined;
  link='https://api.spacexdata.com/v3/missions'


  constructor(private http: HttpClient) {

   }

  ngOnInit(): void {
    this.http.get(this.link).subscribe((responseData:any)=>{
      //console.log(responseData)
      this.Users=responseData;

    })
  }

}
