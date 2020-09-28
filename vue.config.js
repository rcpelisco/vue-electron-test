module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                appId: 'idist.grammer.extractor',
                productName: 'Grammer Extractor',
                win: {
                    target: 'portable',
                    icon: 'public/favicon.ico'
                },
                dmg: {
                    icon: 'public/favicon.ico'
                },
                publish: ['github']
            }
        }
    }
}