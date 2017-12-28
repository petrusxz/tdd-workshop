import { FormlyFieldConfig } from '@ngx-formly/core/src/components/formly.field.config';

export class GithubSearchModel {
    githubUser: string;

    formFields() {
        return <FormlyFieldConfig[]>[
            {
                key: 'githubUser',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Github Username',
                    placeholder: 'Github Username',
                    required: true
                },
                validation: {
                    messages: {
                        required: 'You need to provide a username'
                    }
                }
            }
        ];
    }
}
