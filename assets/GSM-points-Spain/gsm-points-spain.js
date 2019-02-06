<script type=module>

import {Runtime, Inspector} from "https://unpkg.com/@observablehq/runtime@3/dist/runtime.js";
import define from "https://api.observablehq.com/@tmcw/hello-world.js?v=3";

const runtime = new Runtime();
const main = runtime.module(define, Inspector.into(document.body));

</script>
