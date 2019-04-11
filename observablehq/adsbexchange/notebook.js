// URL: https://observablehq.com/d/3bc3cbd6552e007f
// Title: adsbexchange
// Author: 
// Version: 91
// Runtime version: 1

const m0 = {
  id: "3bc3cbd6552e007f@91",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# adsbexchange`
);}),
      node_id: 0
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`[https://global.adsbexchange.com/VirtualRadar/desktop.html](https://global.adsbexchange.com/VirtualRadar/desktop.html)`
);}),
      node_id: 86
    },
    {
      inputs: ["html","width"],
      value: (function(html,width){return(
html `<div id="grid" style="position:relative; width:${width}px; height:800px"></div>`
);}),
      node_id: 16
    },
    {
      name: "viewof searchFlight",
      inputs: ["text"],
      value: (function(text){return(
text({placeholder: "search flight", description: "Search flight", submit: "Search"})
);}),
      node_id: 51
    },
    {
      name: "searchFlight",
      inputs: ["Generators","viewof searchFlight"],
      value: (G, _) => G.input(_),
      node_id: 51
    },
    {
      name: "flightFiltered",
      inputs: ["jsonata","query","dataOrdered"],
      value: (function(jsonata,query,dataOrdered){return(
jsonata(query).evaluate(dataOrdered)
);}),
      node_id: 66
    },
    {
      name: "query",
      inputs: ["searchFlight"],
      value: (function(searchFlight){return(
"$[$contains(Mdl,'"+ searchFlight + "')]"
);}),
      node_id: 67
    },
    {
      name: "grid",
      inputs: ["showData","dataOrdered"],
      value: (function(showData,dataOrdered){return(
showData(dataOrdered, document.querySelector('div#grid'))
);}),
      node_id: 18
    },
    {
      name: "showData",
      inputs: ["dataOrdered"],
      value: (function(dataOrdered){return(
function showData (data, gridDiv) {
  return new window.fin.Hypergrid(gridDiv, {data: dataOrdered});
}
);}),
      node_id: 20
    },
    {
      name: "dataRaw",
      inputs: ["flights"],
      value: (function(flights){return(
flights.acList.map(({ Alt,Spd,Trak,Mdl,Op,Year,Mil})=>({ Alt:Alt,Spd:Spd,Trak:Trak,Mdl:Mdl,Op:Op,Year:Year,Mil:Mil}))
);}),
      node_id: 29
    },
    {
      name: "dataOrdered",
      inputs: ["_","dataRaw"],
      value: (function(_,dataRaw){return(
_.sortBy( dataRaw, 'Year' )
);}),
      node_id: 40
    },
    {
      name: "flights",
      inputs: ["d3"],
      value: (function(d3){return(
d3.json("https://cors-anywhere.herokuapp.com/https://global.adsbexchange.com/VirtualRadar/AircraftList.json")
);}),
      node_id: 8
    },
    {
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
require("d3@5")
);}),
      node_id: 6
    },
    {
      name: "Hypergrid",
      inputs: ["require"],
      value: (function(require){return(
require('https://fin-hypergrid.github.io/core/demo/build/fin-hypergrid.js').catch(() => window.fin.Hypergrid)
);}),
      node_id: 14
    },
    {
      name: "_",
      inputs: ["require"],
      value: (function(require){return(
require('underscore')
);}),
      node_id: 42
    },
    {
      name: "jsonata",
      inputs: ["require"],
      value: (function(require){return(
require('jsonata@1.6.4/jsonata.js')
);}),
      node_id: 56
    },
    {
      from: "@jashkenas/inputs",
      name: "text",
      remote: "text",
      node_id: 54
    },
  ]
};
const m1 = {
  id: "@jashkenas/inputs",
  variables: [
    {
      name: "text",
      inputs: ["input"],
      value: function(input){return(
function text(config = {}) {
  const {
    value,
    title,
    description,
    autocomplete = "off",
    maxlength,
    minlength,
    pattern,
    placeholder,
    size,
    submit
  } = config;
  if (typeof config == "string") value = config;
  const form = input({
    type: "text",
    title,
    description,
    submit,
    attributes: {
      value,
      autocomplete,
      maxlength,
      minlength,
      pattern,
      placeholder,
      size
    }
  });
  form.output.remove();
  form.input.style.fontSize = "1em";
  return form;
}
)}
    },
    {
      name: "input",
      inputs: ["html","d3format"],
      value: function(html,d3format){return(
function input(config) {
  let {
    form,
    type = "text",
    attributes = {},
    action,
    getValue,
    title,
    description,
    format,
    display,
    submit,
    options
  } = config;
  const wrapper = html`<div></div>`;
  if (!form)
    form = html`<form>
	<input name=input type=${type} />
  </form>`;
  Object.keys(attributes).forEach(key => {
    const val = attributes[key];
    if (val != null) form.input.setAttribute(key, val);
  });
  if (submit)
    form.append(
      html`<input name=submit type=submit style="margin: 0 0.75em" value="${
        typeof submit == "string" ? submit : "Submit"
      }" />`
    );
  form.append(
    html`<output name=output style="font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;"></output>`
  );
  if (title)
    form.prepend(
      html`<div style="font: 700 0.9rem sans-serif;">${title}</div>`
    );
  if (description)
    form.append(
      html`<div style="font-size: 0.85rem; font-style: italic;">${description}</div>`
    );
  if (format) format = typeof format === "function" ? format : d3format.format(format);
  if (action) {
    action(form);
  } else {
    const verb = submit
      ? "onsubmit"
      : type == "button"
      ? "onclick"
      : type == "checkbox" || type == "radio"
      ? "onchange"
      : "oninput";
    form[verb] = e => {
      e && e.preventDefault();
      const value = getValue ? getValue(form.input) : form.input.value;
      if (form.output) {
        const out = display ? display(value) : format ? format(value) : value;
        if (out instanceof window.Element) {
          while (form.output.hasChildNodes()) {
            form.output.removeChild(form.output.lastChild);
          }
          form.output.append(out);
        } else {
          form.output.value = out;
        }
      }
      form.value = value;
      if (verb !== "oninput")
        form.dispatchEvent(new CustomEvent("input", { bubbles: true }));
    };
    if (verb !== "oninput")
      wrapper.oninput = e => e && e.stopPropagation() && e.preventDefault();
    if (verb !== "onsubmit") form.onsubmit = e => e && e.preventDefault();
    form[verb]();
  }
  while (form.childNodes.length) {
    wrapper.appendChild(form.childNodes[0]);
  }
  form.append(wrapper);
  return form;
}
)}
    },
    {
      name: "d3format",
      inputs: ["require"],
      value: function(require){return(
require("d3-format@1")
)}
    },
  ]
};
const nodes = [{"id":0,"value":"md`# adsbexchange`","pinned":false},{"id":86,"value":"md`[https://global.adsbexchange.com/VirtualRadar/desktop.html](https://global.adsbexchange.com/VirtualRadar/desktop.html)`","pinned":false},{"id":16,"value":"html `<div id=\"grid\" style=\"position:relative; width:${width}px; height:800px\"></div>`","pinned":false},{"id":51,"value":"viewof searchFlight = text({placeholder: \"search flight\", description: \"Search flight\", submit: \"Search\"})","pinned":false},{"id":66,"value":"flightFiltered  = jsonata(query).evaluate(dataOrdered)  ","pinned":true},{"id":67,"value":"query = \"$[$contains(Mdl,'\"+ searchFlight + \"')]\"","pinned":true},{"id":18,"value":"grid = showData(dataOrdered, document.querySelector('div#grid'))","pinned":false},{"id":20,"value":"function showData (data, gridDiv) {\n  return new window.fin.Hypergrid(gridDiv, {data: dataOrdered});\n}","pinned":false},{"id":29,"value":"dataRaw = flights.acList.map(({ Alt,Spd,Trak,Mdl,Op,Year,Mil})=>({ Alt:Alt,Spd:Spd,Trak:Trak,Mdl:Mdl,Op:Op,Year:Year,Mil:Mil}))","pinned":false},{"id":40,"value":"dataOrdered = _.sortBy( dataRaw, 'Year' );","pinned":true},{"id":8,"value":"flights = d3.json(\"https://cors-anywhere.herokuapp.com/https://global.adsbexchange.com/VirtualRadar/AircraftList.json\")","pinned":true},{"id":6,"value":"d3 = require(\"d3@5\")","pinned":false},{"id":14,"value":"Hypergrid = require('https://fin-hypergrid.github.io/core/demo/build/fin-hypergrid.js').catch(() => window.fin.Hypergrid)","pinned":false},{"id":42,"value":"_ = require('underscore')","pinned":false},{"id":56,"value":"jsonata = require('jsonata@1.6.4/jsonata.js')","pinned":false},{"id":54,"value":"import {text} from \"@jashkenas/inputs\"","pinned":false}];

const notebook = {
  id: "3bc3cbd6552e007f@91",
  modules: [m0,m1],
  nodes
};
export default notebook;
