import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CompleterService, CompleterData, RemoteData } from "ng2-completer";
import { AlertService, TerminalsService } from '../../_services/index';

@Component({
  selector: 'app-create-terminal',
  templateUrl: './create-terminal.component.html'
})
export class CreateTerminalComponent implements OnInit {

  model: any = {};
  loading = false;
  private dataService: RemoteData;

  constructor(private alertService: AlertService, private terminalsService: TerminalsService, private completerService: CompleterService) {
    this.dataService = completerService.remote(null, "name", "name");
this.dataService.urlFormater(term => {
        return environment.apiEndpoint + "/merchants";
    });
   }

  ngOnInit() {
  }


  createTerminal() {
      this.loading = true;
      this.terminalsService.create(this.model)
          .subscribe(
              data => {
                  this.loading = false;
                  this.alertService.success('Terminal created successfully.')
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }

}
