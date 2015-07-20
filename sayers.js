var people = [
    {name: "Dorothy", places: ["London", "Oxford"]},
    {name: "Henry", start_date: 1926},
    {name: "Bob", start_date: 1935}
    ]

    people.forEach( function(n) {
      var div = document.createElement('div');
      div.innerHTML = n.name;
      document.body.appendChild(div);
    })

var Person = function(name, options) {
      var me = this;
      this.name = name;
      var optional_arguments = ["blurb", "places"];

      Object.keys(options).forEach(function(key) {
        me[key] = options[key];
      });
      return this;
    };
    stuff = {places: [], start_date: 1926};
    x = new Person("Lucy", stuff)
