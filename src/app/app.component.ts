import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GithubSearchModel } from './models/github-search.model';
import { FormlyFieldConfig } from '@ngx-formly/core/src/components/formly.field.config';

import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { GithubRepositoryModel } from './models/github-repository.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  githubSearchForm: FormGroup;
  githubSearch: GithubSearchModel;
  githubSearchFields: Array<FormlyFieldConfig>;
  githubRepository: Array<GithubRepositoryModel>;

  constructor(private http: HttpClient) {
    this.githubSearchForm = new FormGroup({});
    this.githubSearch = new GithubSearchModel();
    this.githubSearchFields = this.githubSearch.formFields();
    this.githubRepository = new Array<GithubRepositoryModel>();
  }

  submitGithubSearchForm(githubSearch: GithubSearchModel) {
    this.getRepos(githubSearch.githubUser)
      .subscribe(resp => {
        resp.map((item: GithubRepositoryModel) => {
          // tslint:disable-next-line:no-shadowed-variable
          this.githubRepository.push(new GithubRepositoryModel(item));
        });
      }, err => {
        console.log(err);
      });
  }

  getRepos(githubUser: string): Observable<GithubRepositoryModel[]> {
    return this.http.get<GithubRepositoryModel[]>(`https://api.github.com/users/${githubUser}/repos`)
      .pipe(
      tap(resp => resp as GithubRepositoryModel[]),
      catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<any> {
    // tslint:disable-next-line:curly
    if (error.status === 0)
      return Observable.throw('Erro de conexão.');

    return Observable.throw(error);
  }
}
