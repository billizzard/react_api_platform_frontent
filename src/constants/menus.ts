export const topMenuItems = [
    {title: 'Home', url: '/'},
    {title: 'Registration', url: '/security/registration'},
];

export const leftAdminMenu = {
    title: 'Menu title',
    items: [
        {
            title: 'Products',
            url: '/room/products'
        },
        {
            title: 'Messages',
            url: '/room/messages'
        },
        {
            title: 'Home',
            items: [
                {title: 'Home1', url: '/'},
                {title: 'Home2', url: '/'},
                {title: 'Home3', url: '/'},
            ]
        },
    ]
};