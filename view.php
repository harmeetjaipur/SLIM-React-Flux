// Generate page
basicTemplate( function() use ( $props ) {
  $props_json = json_encode( $props );
  return <<< EOT
<div class="container">
  <main id='app'></main>
</div>
<script type="text/javascript">
  CH.event.emit('page.app.load', {$props_json});
</script>
EOT;
});

// Basic template wrapper for wp_head()
function basicTemplate( $content ) {
  ?><!DOCTYPE html>
  <html>
  <head>
    <title>App</title>
    <meta name="viewport" content="initial-scale=1, user-scalable=no, maximum-scale=1, width=device-width">
    <?php wp_head(); ?>
  </head>
  <body>
    <?= $content() ?>
  </body>
  </html>
  <?php
}

// dispatcher
$app->get('/home', function (Request $req, Response $res) {
    require_once __DIR__ . '/view/App.php';
});

