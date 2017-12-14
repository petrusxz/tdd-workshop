import { FormlyFieldConfig } from '@ngx-formly/core/src/components/formly.field.config';

export class GithubSearchModel {
    githubRepository: string;
    searchHistory: Array<string>;
    accessedRepositories: Array<string>;

    formFields() {
        return <FormlyFieldConfig[]>[
            {
                key: 'githubRepository',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Github Repository',
                    placeholder: 'Github Repository',
                    required: true
                },
                validation: {
                    messages: {
                        required: 'You need to provide a repository name'
                    }
                }
            }
        ]
    }
}
