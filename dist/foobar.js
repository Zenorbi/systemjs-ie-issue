System.register(["./foo", "./bar"], function(exports_1) {
    var foo_1, bar_1;
    var Foobar;
    return {
        setters:[
            function (foo_1_1) {
                foo_1 = foo_1_1;
            },
            function (bar_1_1) {
                bar_1 = bar_1_1;
            }],
        execute: function() {
            Foobar = (function () {
                function Foobar() {
                    console.log(foo_1.Foo, bar_1.Bar);
                }
                return Foobar;
            })();
            exports_1("Foobar", Foobar);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2Jhci50cyJdLCJuYW1lcyI6WyJGb29iYXIiLCJGb29iYXIuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztZQUlBO2dCQUNDQTtvQkFDQ0MsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsU0FBR0EsRUFBQ0EsU0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RCQSxDQUFDQTtnQkFDRkQsYUFBQ0E7WUFBREEsQ0FKQSxBQUlDQSxJQUFBO1lBSkQsMkJBSUMsQ0FBQSIsImZpbGUiOiJmb29iYXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==