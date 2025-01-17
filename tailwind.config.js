module.exports = {
    purge: {
        enabled: true,
        content: ['index.html']
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    darker: 'var(--primary-darker)',
                    hover: 'var(--primary-hover)'
                },
                soft: {
                    violet: 'var(--soft-violet)',
                }

            },
        },
        fontSize: {
            'xl': ['90px', {
                lineHeight: '81px',
                letterSpacing: '4%',
                fontWeight: '500',
            }],
            'base': ['20px', {
                lineHeight: '20px',
                fontWeight: '400',
            }],
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}