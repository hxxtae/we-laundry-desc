/* import 방식 */
import 'bootstrap/dist/js/bootstrap.bundle.js';

/*
===========================
  ToolTip
===========================
*/
$(document).ready(function(){
  $('[data-bs-toggle="tooltip"]').tooltip();
});

/*
  --------------------
    Example
  --------------------

  <CDN 방식>
  <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>

  <import 방식>
  import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';

  <require 방식>
  const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
*/
