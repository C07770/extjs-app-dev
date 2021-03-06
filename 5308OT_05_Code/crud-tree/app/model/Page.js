Ext.define('CrudTree.model.Page', {
    extend: 'Ext.data.TreeModel',
    clientIdProperty: 'clientId',
    identifier: {
        type: 'sequential',
        prefix: 'Unsaved-'
    },
    schema: {
        namespace: 'CrudTree.model',
        urlPrefix: 'http://localhost:3000',
        proxy: {
            type: 'rest',
            url: '{prefix}/{entityName:uncapitalize}'
        }
    },
    fields: [
        { name: 'body' },
        { name: 'stub' },
        { name: 'text' },
        { name: 'published' }
    ]
});
