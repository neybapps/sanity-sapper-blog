export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fa81e8874dee7b9d0d10bfe',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-vsz7ftt6',
                  apiId: '2d02835b-80a3-44f5-995d-e7cfeeb916a4'
                },
                {
                  buildHookId: '5fa81e889b0d57a8964efb6d',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-39aejax5',
                  apiId: '5cad946c-fe8c-4325-8ba2-09b13d269a68'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/neybapps/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-39aejax5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
