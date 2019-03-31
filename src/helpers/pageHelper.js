export const loadDecorator = pureAction => async (...args) => {
    console.log('%c START DECORATOR', 'background: orange; color: red;');
    await pureAction(...args)
    console.log('%c END DECORATOR', 'background: orange; color: red;');
}