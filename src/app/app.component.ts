import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GithubSearchModel } from './models/github-search.model';
import { FormlyFieldConfig } from '@ngx-formly/core/src/components/formly.field.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  githubSearchForm: FormGroup;
  githubSearch: GithubSearchModel;
  githubSearchFields: Array<FormlyFieldConfig>;

  constructor() {
    this.githubSearchForm = new FormGroup({});
    this.githubSearch = new GithubSearchModel();
    this.githubSearchFields = this.githubSearch.formFields();
  }

  submitGithubSearchForm(githubSearch: GithubSearchModel) {
  }
}
