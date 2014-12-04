<?php namespace plugins; if(!defined('TX')) die('No direct access.'); ?>

    <script type="text/javascript" src="<?php echo $plugin; ?>jstrans.js"></script>

    <script>
    Jstrans.setLanguage('<?php echo mk('Language')->code; ?>');
    </script>
