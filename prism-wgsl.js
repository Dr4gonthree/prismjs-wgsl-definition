Prism.languages.wgsl = {
    'line-comments': {
        pattern: /\s*\/\/.*/,
        greedy: true,
        alias: 'comment',
    },
    'attributes': {
        pattern: /(@)([A-Za-z_]+)/,
        alias: 'symbol',
    },
    'keyword': [
        { pattern: /\b(bitcast|block|break|case|continue|continuing|default|discard|else|elseif|enable|fallthrough|for|function|if|loop|private|read|read_write|return|storage|switch|uniform|workgroup|write)\b/ },
        { pattern: /\b(asm|const|do|enum|handle|mat|premerge|regardless|typedef|unless|using|vec|void|while)\b/ },
        { pattern: /\b(let|var)\b/ },
        { pattern: /\b(type)\b/ },
        { pattern: /\b(enum)\b/ },
        { pattern: /\b(struct)\b/ },
        { pattern: /\bfn\b/ },
        { pattern: /(\^|\||\|\||&&|<<|>>|!)(?!=)/ },
        { pattern: /&(?![&=])/ },
        { pattern: /(\+=|-=|\*=|\/=|%=|\^=|&=|\|=|<<=|>>=)/ },
        { pattern: /(?<![<>])=(?!=|>)/ },
        { pattern: /(=(=)?(?!>)|!=|<=|(?<!=)>=)/ },
        { pattern: /(([+%]|(\*(?!\w)))(?!=))|(-(?!>))|(\/(?!\/))/ },
        { pattern: /\.(?!\.)/ },
        { pattern: /->/ },
    ],
    'functions': {
        pattern: /\b(fn)\s+(\w+)(?=(\()|(<))(?=.*?)({)/,
        lookbehind: true,
        alias: 'function',
        inside: {},
    },
    'function-calls': {
        pattern: /(\w+)(?=\()/,
        alias: 'function',
        inside: {},
    },
    'constants': [
        { pattern: /(-?\b[0-9][0-9]*\.[0-9][0-9]*)([eE][+-]?[0-9]+)?\b/, alias:'number' },
        { pattern: /-?\b0x[0-9a-fA-F]+\b|\b0\b|-?\b[1-9][0-9]*\b/, alias:'number' },
        { pattern: /\b0x[0-9a-fA-F]+u\b|\b0u\b|\b[1-9][0-9]*u\b/, alias:'number' },
        { pattern: /\b(true|false)\b/, alias:'bolean' },
    ],
    'types': [
        { pattern: /\b(bool|i32|u32|f32)\b/, alias: 'builtin' },
        { pattern: /\b(i64|u64|f64)\b/, alias: 'builtin' },
        { pattern: /\b(vec[2-4]|mat[2-4]x[2-4])\b/, alias: 'builtin' },
        { pattern: /\b(atomic)\b/, alias: 'builtin' },
        { pattern: /\b(array)\b/, alias: 'builtin' },
        { pattern: /\b([A-Z][A-Za-z0-9]*)\b/, alias: 'builtin' },
    ],
    'variables': {
        pattern: /\b(?<!(?<!\.)\.)(?:r#(?!(crate|[Ss]elf|super)))?[a-z0-9_]+\b/,
        alias: 'variable',
    },
    'punctuation': [
        { pattern: /,/ },
        { pattern: /{}/ },
        { pattern: /()/ },
        { pattern: /;/ },
        { pattern: /[\[\]]/ },
        { pattern: /(?<!=)[<>]/ },
    ],
};
