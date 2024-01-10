import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';


interface Result {
  checks: Check[];
  totalStatus: string;
  totalResponseTime: number;
}
interface Check {
  name: string;
  responseTime: number;
  status: string;
  description: string;
}

@Component({
  selector: 'app-health-check',
  templateUrl: './health-check.component.html',
  styleUrl: './health-check.component.css'
})

export class HealthCheckComponent implements OnInit {

  public result?: Result;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Result>(environment.baseUrl + 'health').subscribe(result => {
      this.result = result;
    }, error => console.error(error));
  }

}
