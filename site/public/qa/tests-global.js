/**
 * Created by thuan on 12/2/2014.
 */
suite('Global Tests', function(){
    test('page has a valid title', function(){
        assert(document.title && document.title.match(/\S/) &&
        document.title.toUpperCase() !== 'TODO');
    });
});
