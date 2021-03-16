class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-z0-9-:\\/]+/g)
    }
}

module.exports = {
    content: [
        './src/**/*.vue',
        './src/**/*.js',
        './src/**/*.html',
        './src/**/*.md',
    ],
    whitelist: [
        'body',
        'html',
        'img',
        'a',
        'g-image',
        'g-image--lazy',
        'g-image--loaded'
        
    ],
    extractors: [
        {
            extractor: TailwindExtractor,
            extensions: ['vue', 'js', 'md', 'html'],
        },
    ],
}