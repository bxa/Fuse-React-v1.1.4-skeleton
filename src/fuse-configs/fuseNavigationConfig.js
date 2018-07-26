export const fuseNavigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'example-component',
                'title': 'Example',
                'type' : 'item',
                'icon' : 'whatshot',
                'url'  : '/example'
            }
        ]
    },
    {
        'id'      : 'formBuilder',
        'title'   : 'Form Builder',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'add-form',
                'title': 'Add New Form',
                'type' : 'item',
                'icon' : 'drag_indicator',
                'url'  : '/form-builder/add-form',
            },
            {
                'id'   : 'all-forms',
                'title': 'All Forms',
                'type' : 'item',
                'icon' : 'drag_indicator',
                'url'  : '/form-builder/forms',
            }
        ]
    }
];