import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
    eslintPluginUnicorn.configs['flat/recommended'],
    {
        rules: {
            "unicorn/prevent-abbreviations": ["error", {
                "extendDefaultReplacements": false,
                "replacements": {
                    acc: {
                        accumulator: true,
                    },
                    arr: {
                        array: true,
                    },
                    attr: {
                        attribute: true,
                    },
                    attrs: {
                        attributes: true,
                    },
                    btn: {
                        button: true,
                    },
                    cb: {
                        callback: true,
                    },
                    cur: {
                        current: true,
                    },
                    curr: {
                        current: true,
                    },
                    dev: {
                        development: true,
                    },
                    dir: {
                        direction: true,
                        directory: true,
                    },
                    dirs: {
                        directories: true,
                    },
                    dist: {
                        distribution: true,
                    },
                    e: {
                        error: true,
                        event: true,
                    },
                    el: {
                        element: true,
                    },
                    elem: {
                        element: true,
                    },
                    elems: {
                        elements: true,
                    },
                    err: {
                        error: true,
                    },
                    ev: {
                        event: true,
                    },
                    evt: {
                        event: true,
                    },
                    ext: {
                        extension: true,
                    },
                    exts: {
                        extensions: true,
                    },
                    fn: {
                        function: true,
                    },
                    func: {
                        function: true,
                    },
                    i: {
                        index: true,
                        item: true
                    },
                    idx: {
                        index: true,
                    },
                    len: {
                        length: true,
                    },
                    msg: {
                        message: true,
                    },
                    num: {
                        number: true,
                    },
                    opts: {
                        options: true,
                    },
                    req: {
                        request: true,
                    },
                    res: {
                        response: true
                    },
                    src: {
                        source: true,
                    },
                    val: {
                        value: true,
                    }
                }
            }],
            "unicorn/filename-case": "off",
            "unicorn/no-array-reduce": "off",
            "unicorn/prefer-spread": "off",
            "unicorn/no-thenable": "off",
            "unicorn/prefer-blob-reading-methods": "off",
            "unicorn/no-array-for-each": "off",
            "unicorn/numeric-separators-style": "off"
        }
    },
];